import { useState, useEffect } from 'react';

const useStopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    
    useEffect(() => {
        let invervalId: ReturnType<typeof setInterval>;

        if (!isPaused) {
            invervalId = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000); 
        } 

        return () => {
            clearInterval(invervalId);
        };

    }, [isPaused]);

    let formattedTime = new Date(seconds * 1000).toISOString().substring(11, 19);
    return {formattedTime, isPaused, setIsPaused};
}

export default useStopWatch;