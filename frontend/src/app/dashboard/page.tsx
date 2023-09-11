/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
import CardSession from "../../components/cardSession"
import Navbar from "../../components/navbar/navbar"
import { usePage } from "../../context/navbar"
import Styles from "../../scss/dashboard.module.scss"
import createSession from "../../fetchs/createSession"
import getCookie from "../../fetchs/getCookie"
import getID from "../../fetchs/getID"
import getSessions from "../../fetchs/getSessions"
import deleteSession from "../../fetchs/deleteSession"

const Dashboard: NextPage = () => {
    const { setPage, page } = usePage();
    const [userId, setUserId] = useState<number | null>(null);
    const [sessions, setSessions] = useState<any[]>([]);
    const [cookie, setCookie] = useState<string>("")
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCookie();
                const Rcookie = await JSON.parse(response).token;
                setCookie(Rcookie)
                const idResponse = await getID({ token: String(Rcookie) });
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

    const handleDeleteSession = async (sessionId: number) => {
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
                            jwt={String(cookie)}
                            key={session.id}
                            userId={Number(userId)}
                            id={session.id}
                            tmin={session.tmin}
                            name={session.name}
                            data={[
                                session.data.videos,
                                session.data.caminhaog,
                                session.data.caminhaop,
                                session.data.carro,
                                session.data.moto,
                                session.data.onibus,
                                session.data.tuktuk,
                                session.data.van
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