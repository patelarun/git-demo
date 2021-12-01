import './App.css';
import Books from './Books';
import Characters from './Books/Character';
import Todo from './Todo';
import Counter from './Counter';
import NestedRouting from './NestedRouting';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Link to="/todo">Todo</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/nested-router">Nested Router</Link>
      <Link to="/character">Characters</Link>
      <div className="App">
        <Route exact path="/" component={Books} />
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
        <Route path="/character" component={Characters} />
        <Route path="/nested-router" component={NestedRouting} />
      </div>
    </Router>
  );
}

export default App;
