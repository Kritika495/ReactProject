import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import AccountSettings from './AccountSettings';
import CardList from './CardList';
import {AiOutlineHome} from 'react-icons/ai';
import {GrUserSettings} from 'react-icons/gr';
import {GrLogin} from 'react-icons/gr';
import {BiUserPlus} from 'react-icons/bi';
import {BiErrorCircle} from 'react-icons/bi';
import {TbTypography} from 'react-icons/tb';
import {TbIcons} from 'react-icons/tb';
import {BsCreditCard2Back} from 'react-icons/bs';
import {AiOutlineTable} from 'react-icons/ai';
import {BiCube} from 'react-icons/bi';
import './Home.css';
function Home() {
  return (
    <div>
      <Router>
      <div className='row'>
       <div className='col-md-3'>
          <ul className='sideMenu'>
            <li>
               <Link to= "/" className='nav-link menuItems'> <AiOutlineHome/> Dashboard</Link>
            </li>

            <li>
              <Link to="/accountSettings" className='nav-link menuItems'> <GrUserSettings/> AccountSettings</Link>
            </li>
             <hr className='hr1'/> <span className='t'>Pages</span> <hr className='hr2'/>
             <li>
                <Link to= "" className='nav-link menuItems'><GrLogin/> Login</Link>
             </li>
               
             <li>
                <Link to = "" className='nav-link menuItems'><BiUserPlus/> Register</Link>
             </li>

             <li>
                <Link to= "" className='nav-link menuItems'><BiErrorCircle/> Error</Link>
             </li>
               
             <hr className='hr1'/> <span className='t'>User Interface</span> <hr className='hr3'/>
               <li>
               <Link to = "" className='nav-link menuItems'><TbTypography/> Typography</Link>
                </li>

                <li>
                <Link to = "" className='nav-link menuItems'><TbIcons/> Icons</Link>
                </li>
                <li>
                <Link to = "/cards" className='nav-link menuItems'><BsCreditCard2Back/>Cards</Link>
                </li>
                <li>
                  <Link to= "" className='nav-link menuItems'><AiOutlineTable/> Tables</Link>
                </li>
                <li>
                  <Link to = "" className='nav-link menuItems'><BiCube/> Form Layouts</Link>
                </li>

               
             
          </ul>
          
       </div>


       <div className='col-md-9 displayArea'>
          <Routes>
            <Route path="/accountSettings"  element = {<AccountSettings/>}/>
            <Route path="/"  element= {<Dashboard/>}/>
            <Route path="/cards" element={<CardList/>}/>
          </Routes>
        
       </div>
      </div>
      </Router>
    </div>
  );
}

export default Home;
