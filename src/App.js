import './App.css';
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementByAmount } from "./reduxtank/counter";
import { incAction, store } from '.';


function App() {

  console.log('store', store.getState()) // 0
  store.dispatch(incAction())
  console.log('store ic', store.getState()) // 1

  // const { count } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <div>

        redux toolkit
        <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Increment by 33
        </button>
      </div>
      <div>
        redux
      </div> */}
    </div>
  );
}

export default App;
