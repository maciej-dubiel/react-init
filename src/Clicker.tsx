import { useState } from 'react';
import { BasicButton } from './Styles';

const Clicker = () => {
    const [clickCounter, setClickCounter] = useState(0);
    
    return (
        <>
            <h1>Counter: {clickCounter}</h1>
            <BasicButton onClick={() => setClickCounter(clickCounter + 1)}>+</BasicButton>
            <BasicButton onClick={() => setClickCounter(clickCounter - 1)}>-</BasicButton>
        </>
    );
}

export default Clicker;