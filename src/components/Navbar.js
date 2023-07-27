import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css';
import IMG1 from '../images/logo.png';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("HomePage");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/"){
            setActiveTab("HomePage")
        }
        else if(location.pathname === "/add"){
            setActiveTab("AddContact")
        }else if(location.pathname === "/signin"){
            setActiveTab("Signin")
        }
    }, [location]);
  return (
    <div className='navbar'>
        
            <p className='logo'>
                CONTACT MANAGEMENT SYSTEM
            </p> 
        <div className='navbar-center'>
            <Link to="/">
                <p className={`${activeTab === "HomePage" ? "active" : ""}`}
                    onClick={() => setActiveTab("HomePage")}
                >
                        Logout
                </p>
                </Link>
        </div>
    </div>
  )
}

export default Navbar
