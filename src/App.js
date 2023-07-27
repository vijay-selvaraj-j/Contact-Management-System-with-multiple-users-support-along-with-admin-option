import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditContacts from './pages/AddEditContacts'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from '../src/components/Footer'
import SearchName from './pages/SearchName';
import Signin from './SignIn/signin';
import Register from './SignIn/Register';
import Admin from './SignIn/admin';
import AdUserSel from './pages/AdminUserSelect';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <ToastContainer position='top-center' />
      <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/home" element={<HomePage/>} /> 
        <Route path="/signin" element={<Signin/>} />
        <Route path="/add" element={<AddEditContacts/>} />
        <Route path="/update/:id" element={<AddEditContacts/>} />
        <Route path="/search" element={<SearchName/>} />
        <Route path='/reg' element = {<Register />} />
        <Route path = '/admin' element = {<Admin />} />
        <Route path='/adusersel' element = {<AdUserSel />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
