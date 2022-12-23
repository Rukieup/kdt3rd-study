import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import IncreaseFunction from './IncreaseFunction';
import PlusFunction from './PlusFunction';
import SayFunction from './SetFunction';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr />

      <SayFunction/>
      <hr />

      <CounterFunction value="일 더하기"/>
      <hr />

      <PlusFunction/>
      <hr />

      <IncreaseFunction/>
      <hr />
    </div>
  );
}

export default App;
