import { useReducer } from "react";
function App() {
  const initialState = {
    count: 0,
  };

  const counterReducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return { ...state, count: state.count + 1 };
    } else if (action.type === "DECREMENT") {
      return { ...state, count: state.count - 1 };
    } else if (action.type === "RESET") {
      return { ...state, count: 0 };
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useReducer Hook</h1>
      <p>count : {state.count}</p>

      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment count
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement count
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset count</button>
      </div>
      <hr />
      <h1>useReducer Hook Ex-2</h1>
    </div>
  );
}

export default App;
