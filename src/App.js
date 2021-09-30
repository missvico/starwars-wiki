import logo from './logo.svg';
import './App.css';
import Characters from './views/Characters/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Wiki</h1>
        <Characters/>
      </header>
    </div>
  );
}

export default App;
