import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import "./App.css"

function App() {
  const state = useSelector((state: State) => state.bank)
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch); 

  return (
    <div className="App">
        <h1>{state}</h1>
        <button onClick={() => depositMoney(100)}>Deposit</button>
        <button onClick={() => withdrawMoney(10)}>Withdraw</button>
        <button onClick={() => bankrupt(0)}>Bankrupt</button>
    </div>
  );
}

export default App;
