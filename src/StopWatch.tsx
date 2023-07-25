import { useState, useEffect } from 'react';
import { BasicButton } from './Styles';

const StopWatch = () => {
    const [ms, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    
    useEffect(() => {
        let invervalId: ReturnType<typeof setInterval>;

        if (!isPaused) {
            invervalId = setInterval(() => {
                setTime(ms => ms + 1);
            }, 1); 
        } 

        return () => {
            clearInterval(invervalId);
        };

    }, [isPaused]);

    return (
        <>
            <h1>Stop Watch: {ms} ms</h1>
            {isPaused && <BasicButton onClick={() => setIsPaused(false)}>START</BasicButton>}
            {!isPaused && <BasicButton onClick={() => setIsPaused(true)}>STOP</BasicButton>}
        </>
    );
}

export default StopWatch;