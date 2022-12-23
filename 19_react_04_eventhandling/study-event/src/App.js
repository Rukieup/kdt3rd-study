import './App.css';
import ClassBind from './ClassBind';
import ColorChange from './ex/ColorChange';
import Handle_ex from './ex/Handler_ex';
import Handler_func from './ex/Handler_func';
import Void from './ex/Void';
import NumberTest from './NumberTest';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <hr />

      <NumberTest/>
      <hr />

      <ClassBind/>
      <hr />

      <Handle_ex/>
      <hr />

      <Handler_func/>
      <hr />

      <ColorChange/>
      <hr />

      <Void/>
    </div>
  );
}

export default App;
