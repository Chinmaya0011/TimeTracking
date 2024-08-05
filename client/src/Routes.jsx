// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import Settings from './Components/Settings';
import CreateCampaign from './Components/CreateCampaign';
import Login from './Components/Login';
import Signup from './Components/Signup';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Setting" element={<Settings/>}/>
        <Route path="/Ads" element={<CreateCampaign/>}/>
        <Route path='/Login'element={<Login/>}/>
        {/* Add more routes here as needed */}
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
