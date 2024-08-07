// components/CountdownTimer.tsx
'use client'
// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string;
}

interface TimeLeft {
    Dias: number;
    Horas: number;
    Minutos: number;
    Segundos: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = { Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 };

        if (difference > 0) {
            timeLeft = {
                Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutos: Math.floor((difference / 1000 / 60) % 60),
                Segundos: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex flex-col items-center space-y-3">
            <h2 className="text-2xl font-medium text-white">CONTAGEM REGRESSIVA</h2>
            <div className="flex justify-center space-x-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white rounded-lg shadow p-5">
                        <p className="text-4xl font-bold text-center">{value}</p>
                        <p className="text-md text-center capitalize">{unit.toLowerCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
