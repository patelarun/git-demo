import './App.css';
import Users from './Users';
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
      <div className="App">
        <Route exact path="/" component={Users} />
        <Route path="/todo" component={Todo} />
        <Route path="/counter" component={Counter} />
        <Route path="/nested-router" component={NestedRouting} />
      </div>
    </Router>
  );
}

export default App;
