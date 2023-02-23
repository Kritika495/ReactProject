import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Link , Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AccountSettings from './Components/AccountSettings';
import './App.css';
function App() {
  return (
    <div>
     <Home/> 
    </div>
  );
}

export default App;
