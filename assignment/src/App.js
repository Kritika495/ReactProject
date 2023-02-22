import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AccountSettings from './Components/AccountSettings';
import './App.css';
function App() {
  return (
    <div>
      <Router>
      <div className='row'>
       <div className='col-md-4'>
          <ul className='sideMenu'>
            <li>
               <Link to= "/" className='nav-link menuItems'>Dashboard</Link>
            </li>

            <li>
              <Link to="/accountSettings" className='nav-link menuItems'>AccountSettings</Link>
            </li>

          </ul>
       </div>


       <div className='col-md-8'>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* <Switch>
          <Route path="/">
             <Dashboard/>
          </Route>

          <Route path= "/">
            <AccountSettings/>
          </Route>
          </Switch> */}
          <Routes>
            <Route path="/accountSettings"  element = {<AccountSettings/>}/>
            <Route path="/"  element= {<Dashboard/>}/>
          </Routes>
        
       </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
