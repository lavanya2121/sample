 import React from 'react';

//  import App from './App'

//npm install react-router-dom
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Counter from './Counter'
import About from './About'
import Services from './Services'
import Support from './Support'
import Assignements from './Assignements'
import GenerateRandom from './GenerateRandom'
import ListingUsers from './ListingUsers'
import Users from './Users'
import UserShow from './UserShow'


function App() {
  return (
    <BrowserRouter>
    <div>
      <h2>Hello React from dct</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/assignements">Assignements</Link></li>
      </ul>
      

      <Route path="/" component={Home} exact={true}/>
      <Route path="/counter" component={Counter} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/users" component={Users} />
      <Route path="/users/:id" component={UserShow} />
      <Route path="/support" component={Support} />
      <Route path="/assignements" component={Assignements} exact={true} />
      <Route path="/assignements/listing-users" component={ListingUsers}/>
      <Route path="/assignements/generate-random-numbers" component={GenerateRandom}/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
