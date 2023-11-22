"use client"

import { NextPage } from "next";
import { useState, useEffect } from "react";
import Styles from "../../../../scss/data.module.scss"

const Page: NextPage = () => {
    const [loading, setLoading] = useState(true);
    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        const generateFakeData = () => {
            setTimeout(() => {
                const fakeData: any = [
                    {
                        vehicle_type: "caminhaog",
                        in: 1,
                        out: 1
                    },
                    {
                        vehicle_type: "caminhaop",
                        in: 0,
                        out: 2
                    },
                    {
                        vehicle_type: "carro",
                        in: 35,
                        out: 30
                    },
                    {
                        vehicle_type: "moto",
                        in: 8,
                        out: 4
                    },
                    {
                        vehicle_type: "onibus",
                        in: 5,
                        out: 0
                    },
                    {
                        vehicle_type: "tuktuk",
                        in: 5,
                        out: 6
                    },
                    {
                        vehicle_type: "van",
                        in: 1,
                        out: 2
                    },
                ];

                setFakeData(fakeData);
                setLoading(false);
            }, 26000);
        };

        generateFakeData();
    }, []);

    return (
        <div className={Styles.container}>
            {loading ? (
                <div className={Styles.loading}>Loading...</div>
            ) : (
                <div className={Styles.itemContainer}>
                    <h1>Dados coletados</h1>
                    <ul>
                        {fakeData.map((item: any, index) => (
                            <li key={index}>
                                Vehicle Type: {item.vehicle_type}, In: {item.in}, Out: {item.out}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Page;
