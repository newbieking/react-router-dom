import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

const TODO_LIST = [
  { id: 1, title: "playing game...", createTime: new Date(), deadLine: new Date() },
  { id: 2, title: "writing blog...", createTime: new Date(), deadLine: new Date() },
  { id: 3, title: "reading note...", createTime: new Date(), deadLine: new Date() },
]

function  App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TodoList todoList={TODO_LIST} />
    </div>
  );
}

export default App;
