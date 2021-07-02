import './App.css';
import{useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './redux/index'
function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const {depositeMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch)

  return (
    <div className="App">
      <h1 className="text">${account}</h1>
      <div className="container">
        <button className="button1" onClick={()=>withdrawMoney(100)}>withdraw</button>
        <button className="button2" onClick={()=>depositeMoney(100)}>deposit</button>
      </div>

    </div>
  );
}

export default App;
