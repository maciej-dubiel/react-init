import { useState } from 'react';
import styled from 'styled-components';
import Clicker from './Clicker';
import StopWatch from './StopWatch';

const StyledSection = styled.section`
  padding: 20px;  
  background: #ddd;
  margin: 20px;
  width: 320px;
  border-radius: 25px;
  border: 2px solid #aaa; 
`;

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <>
      <StyledSection>
        <Clicker clickCount={clickCount} setClickCount={setClickCount} />
      </StyledSection>
      <StyledSection>
        <StopWatch />
      </StyledSection>
    </>
  );
}

export default App;
