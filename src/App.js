import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/facebook' component={() => {
          window.location.href = "https://www.facebook.com/";
          return null;
        }}/>
        <Route path='/instagram' component={() => {
          window.location.href = "https://www.instagram.com/";
          return null;
        }}/>
        <Route path='/youtube' component={() => {
          window.location.href = "https://www.youtube.com/";
          return null;
        }}/>
        <Route path='/twitter' component={() => {
          window.location.href = "https://twitter.com/home";
          return null;
        }}/>
        <Route path='/linkedin' component={() => {
          window.location.href = "https://www.linkedin.com/feed/";
          return null;
        }}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
