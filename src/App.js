import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Login from './login';
import Forget from './forget';
import Submit from './Submit';

function App() {
  return (
  <div>
   
    <Router>
    <Route path="/" exact >
                        <Home /></Route>
                    <Route path="/login" >
                        <Login /></Route><Route path="/submit" >
                        <Submit /></Route>
                        <Route path="/forget">
                        <Forget />
                    </Route>
                    </Router>
  </div>

  );
}

export default App;
