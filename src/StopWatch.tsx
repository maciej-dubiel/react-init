import { BasicButton } from './Styles';
import useStopWatch from './hooks/UseStopWatch';

const StopWatch = () => {
    const {formattedTime, isPaused, setIsPaused} = useStopWatch();

    return (
        <>
            <h1>Stop Watch: {formattedTime}</h1>
            {isPaused && <BasicButton onClick={() => setIsPaused(false)}>START</BasicButton>}
            {!isPaused && <BasicButton onClick={() => setIsPaused(true)}>STOP</BasicButton>}
        </>
    );
}

export default StopWatch;