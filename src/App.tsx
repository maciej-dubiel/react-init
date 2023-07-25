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
  return (
    <>
      <StyledSection>
        <Clicker></Clicker>
      </StyledSection>
      <StyledSection>
        <StopWatch></StopWatch>
      </StyledSection>
    </>
  );
}

export default App;
