import './App.css';
import styled from 'styled-components';

function App() {
  return (
	<StyledMain>
    Raphael Bustamante's Site
	</StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
