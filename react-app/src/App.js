import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Welcome } from './components/Welcome';
import { Message } from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greet name="Dayanidhi" age="18"/>
      <Greet name= "sabitarani" age="20"/>
      <Welcome name="Dayanidhi" age="18"/>
      <Welcome name= "sabitarani" age="20"/>
      <Message />
      <Counter />
    </div>
  );
}

export default App;
