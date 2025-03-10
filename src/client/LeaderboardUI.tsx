// LeaderboardUI.tsx - React UI component for leaderboard display
import React, { useEffect, useState } from "react";
import leaderboard from "../Leaderboard"; // Import leaderboard logic

const LeaderboardUI = () => {
    const [scores, setScores] = useState<{ player: string; score: number }[]>([]);

    useEffect(() => {
        setScores(leaderboard.getTopScores());
    }, []);

    return (
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
            <ul>
                {scores.map((entry, index) => (
                    <li key={index} className="border-b py-1">
                        {index + 1}. {entry.player}: {entry.score} pts
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderboardUI;
