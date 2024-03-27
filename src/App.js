// App.js
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Login from './Components/Login';
import Accounts from './Components/Accounts';
import Customers from './Components/Customers';
import Landing from './Components/Landing';
 
const App = () => {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Login />}/>
        <Route path = "/landing" element={<Landing />}/>
        <Route path = "/accounts" element={<Accounts />}/>
        <Route path = "/customers" element={<Customers />}/>

      </Routes>
    </Router>
  );
};
 
export default App;
