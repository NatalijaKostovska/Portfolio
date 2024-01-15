import './App.css';
import NavBar from './components/NavBar';
import WelcomeComponent from './components/WelcomeComponent';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import FormSection from './components/FormSection';
import { AppWrapper } from './components/WelcomeComponent/Welcome.styled';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeToDarkTheme } from './reduxtank/theme';

const darkTheme = {
  body: '#222831'

}
const lightTheme = {
  body: 'white'
}

function App() {
  const { theme } = useSelector((state) => state.theme)

  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(changeToDarkTheme())
  }

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <AppWrapper>
        <NavBar toggleTheme={toggleTheme} />
        <div>
          <WelcomeComponent />
          <AboutMe />
          <Works />
          <FormSection />
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
