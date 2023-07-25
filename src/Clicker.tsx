import React from 'react';
import { BasicButton } from './Styles';

interface Props {
    clickCount: number;
    setClickCount: (value: React.SetStateAction<number>) => void;
}

const Clicker = ({clickCount, setClickCount} : Props) => {  
    return (
        <>
            <h1>Counter: {clickCount}</h1>
            <BasicButton onClick={() => setClickCount((prev) => prev + 1)}>+</BasicButton>
            <BasicButton disabled={clickCount === 0} onClick={() => setClickCount((prev) => prev - 1)}>-</BasicButton>
        </>
    );
}

export default Clicker;