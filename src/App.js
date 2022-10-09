import React,{useState} from "react";
import Store from "./Redux/Store";
import {IncreaseValue,DecreaseValue} from "./Redux/Action"


function App() {
  const {dispatch,subscribe} = Store;
  const {counter} = Store.getState();
  const [sub , setsub] = useState(0)

  subscribe(()=>{
    setsub(sub + 1);
  })
  return (
    <>
    <h1>Counter Value is {counter}</h1>
    <button onClick={() => dispatch(IncreaseValue(10))}>Increase</button>
    <button onClick={() => dispatch(DecreaseValue(10))}>Decrease</button>
    </>
  );
}

export default App;
