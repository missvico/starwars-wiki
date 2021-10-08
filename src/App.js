import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Characters from './views/Characters/index'
import Planets from './views/Planets/index'
import SingleCharacter from './views/SingleCharacter/index'
import Form from './views/Form/index'


function App() {
  return (
    <BrowserRouter>
    <Form></Form>
    {/* <div className="App">
          <h1>Star Wars Wiki</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/characters">Characters</Link></li>
          <li className="nav-item"><Link to="/planets">Planets</Link></li>
        </ul>
      </nav> */}
      {/* <Switch>
        <Route path="/planets"><Planets/></Route>
        <Route path="/characters/:id"><SingleCharacter/></Route>
        <Route path="/characters"><Characters/></Route>
        <Route path="/"><p> Not Found</p></Route>
      </Switch>
      <Route exact path="/">
        <Redirect to="/characters" />
      </Route> */}
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
