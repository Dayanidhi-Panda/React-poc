import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Welcome } from './components/Welcome';
import { Message } from './components/Message';
import Counter from './components/Counter';
import { DestructureProps } from './components/DestructureProps';
import { DestructureState } from './components/DestructureState';
import { Parentcomp } from './components/Parentcomp';
import { Postlist } from './Httpcomponent/Postlist';
import { Statehook } from './Hooks/Statehook';
import Hookincrementdecrement from './Hooks/Hookincrementdecrement';
import UsestateHookwithobject from './Hooks/UsestateHookwithobject';
import UsestateHookwithArray from './Hooks/UsestateHookwithArray';

function App() {
  return (
    <div className="App">
      <Greet name="Dayanidhi" age="18"/>
      {/* <Greet name= "sabitarani" age="20"/>
      <Welcome name="Dayanidhi" age="18"/>
      <Welcome name= "sabitarani" age="20"/>
      <Message />
      <Counter />
      <DestructureProps name="Destructure props" age="20" />
      <DestructureState name="Destructure state" age="30"/>
      <Parentcomp /> 
       <Postlist />
      <Statehook />
      <Hookincrementdecrement />
      <UsestateHookwithobject /> */}
      <UsestateHookwithArray name="Dayanidhi"/>
    </div>
  );
}

export default App;
