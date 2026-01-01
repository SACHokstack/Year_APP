import React, { useState, useEffect } from 'react';

const YearGrid = () => {
    const [dots, setDots] = useState([]);
    const [progress, setProgress] = useState({ passed: 0, total: 365, remaining: 365 });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 0);
            const diff = now - start;
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);
            
            // Dimensions for 2026 or current year
            const year = now.getFullYear();
            const daysInYear = (year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ? 366 : 365;
            
            setProgress({
                passed: dayOfYear,
                total: daysInYear,
                remaining: daysInYear - dayOfYear
            });

            // Generate dot states
            const newDots = Array.from({ length: daysInYear }, (_, i) => {
                const dayNum = i + 1;
                if (dayNum < dayOfYear) return 'past'; // Gone/Invisible
                if (dayNum === dayOfYear) return 'today'; // Highlight
                return 'future'; // Visible
            });
            setDots(newDots);
        };

        calculateTime();
        // Update every minute to catch day rollovers
        const interval = setInterval(calculateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid-container">
            {dots.map((status, index) => (
                <div key={index} className={`dot ${status}`} />
            ))}
        </div>
    );
};

export default YearGrid;
