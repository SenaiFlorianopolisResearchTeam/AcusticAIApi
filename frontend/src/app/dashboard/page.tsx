/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import CardSession from "../../components/cardSession"
import { NextPage } from "next"
import Styles from "../../scss/dashboard.module.scss"
import { usePage } from "../../context/navbar"
import { useEffect, useState } from "react"
import createSession from "../../fetchs/createSession"
import getCookie from "../../fetchs/getCookie"
import getID from "../../fetchs/getID"
import getSessions from "../../fetchs/getSessions"
import deleteSession from "../../fetchs/deleteSession"
import { useRouter } from "next/navigation"
import Navbar from "../../components/navbar/navbar"

const Dashboard: NextPage = () => {
    const { setPage, page } = usePage();
    const [userId, setUserId] = useState<number | null>(null);
    const [sessions, setSessions] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCookie();
                const cookie = JSON.parse(response).token;
                const idResponse = await getID({ token: cookie });
                const id = JSON.parse(idResponse).userId;
                setUserId(id);

                const sessionsResponse = await getSessions({ userId: id });
                const sessionsData = JSON.parse(sessionsResponse);
                setSessions(sessionsData);

            } catch (err) {
                console.error(err);
                router.push('/login');
                //remover user
            }
        };

        fetchData();
    }, []);

    const fetchUpdatedSessions = async () => {
        try {
            const sessionsResponse = await getSessions({ userId: Number(userId) });
            const sessionsData = JSON.parse(sessionsResponse);
            setSessions(sessionsData);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCreateSession = async () => {
        try {
            await createSession({ userId: Number(userId), name: "Session" });
            fetchUpdatedSessions();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteSession = async (sessionId: string) => {
        try {
            await deleteSession({ userId: Number(userId), sessionId });
            fetchUpdatedSessions();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className={Styles.dashboard}>
            <Navbar onCreateSession={handleCreateSession}/>
            <div className={Styles.cards}>
                {sessions.length === 0 ? (
                    <div className={Styles.noneCard}>
                        <p>Create your first AI traffic session</p>
                        <button onClick={() => handleCreateSession()}>
                            Create
                        </button>
                    </div>
                ) : (
                    sessions.map((session) => (
                        <CardSession
                            key={session.id}
                            id={session.id}
                            name={session.name}
                            data={[
                                session.horas,
                                session.videos,
                                session.veiculos,
                                session.carros,
                                session.onibus,
                                session.moto,
                            ]}
                            onDeleteSession={handleDeleteSession}
                        />
                    ))
                )}
            </div>
        </main>
    );
};

export default Dashboard;