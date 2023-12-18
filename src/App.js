import './App.css';
import { useDispatch, useSelector } from "react-redux";
import NavBar from './components/NavBar';
import WelcomeComponent from './components/WelcomeComponent';
import AboutMe from './components/AboutMe';
import Works from './components/Works';


function App() {

  // console.log('store', store.getState()) // 0
  // console.log('store ic', store.getState()) // 1

  /* The line `// const dispatch = useDispatch();` is commented out, so it is not doing anything in the
  code. It is likely that it was previously used to get the dispatch function from the Redux store,
  but it is not being used in the current code. */
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { theme } = useSelector((state) => state.theme);
  const buttonStyle = {
    backgroundColor: '#0000ff42',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '1px solid #0000ff42'
  };
  return (
    <div className="App" style={{ background: theme === 'dark' ? '#222831' : '#EEEEEE' }}>
      <NavBar />
      <div>
        <WelcomeComponent />
        <AboutMe />
        <Works />
        {/* <div> The count is: {count}</div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => dispatch(increment())} style={buttonStyle}>increment</button>
          <button onClick={() => dispatch(decrement())} style={buttonStyle}>decrement</button>
          <button onClick={() => dispatch(incrementByAmount(33))} style={buttonStyle}>
            Increment by 33
          </button>
        </div>
        <div>
          <div>Change theme</div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={() => dispatch(changeToDarkTheme())} style={buttonStyle}>Change to dark</button>
            <button onClick={() => dispatch(changeToLightTheme())} style={buttonStyle}>Change to light</button>
          </div>
        </div> */}
      </div>
      {/* <div>
        redux
      </div> */}
    </div>
  );
}

export default App;
