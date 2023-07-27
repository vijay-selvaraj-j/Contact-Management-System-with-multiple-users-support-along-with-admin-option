import './signin.css'
import React, {useState as US, useEffect} from 'react';
import fireDb from '../firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate as UN} from "react-router-dom";


const initialState = {
    name: "",
    pass: "",
    cpass: ""
  }


const Register = () => {

    const Navigate = UN();

    const [state, setState] = US(initialState);
    const [data, setData] = US({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !pass || !cpass) {
            toast.error("Please enter all the values");
            } 
            else {
              if(pass.length<8)
              {
                toast.error("Password Length is too short");

              }
              else{
               if(pass === cpass){
                fireDb.child(`Users/Validation`).push(state, (err) => {
                  if (err) {
                  toast.error(err);
                  } else {
                  toast.success("User Added Successfully!!!");
                  }
                  });
                  setTimeout(() => Navigate("/signin"), 500);
               }
               else{
                toast.error("Passwords don't match!");
               }            
                
              }
            }
    };

    const handleInputChange = (e) =>
    {
        const {name, value} = e.target;
        setState({ ...state, [name]: value });
    };

    const {name, pass, cpass} = state;

  return (
    <div>
      <center>
        <br/><br/><h1>Registration Page</h1><br/><br/>
        <form style={{margin: '',
       padding: '30px',
      maxWidth: '400px', 
      alignContent: 'center'
      }}
      onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Username</td>
                    <td><input 
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter Your Name'
                    value={name || ""} 
                    onChange={handleInputChange}
                    /></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input 
                    type='password' 
                    id='pass'
                    name='pass'
                    placeholder='Enter Password'
                    value={pass || ""}
                    onChange={handleInputChange}

                    /></td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td><input 
                    type='password' 
                    id='cpass'
                    name='cpass'
                    placeholder='Confirm Password'
                    value={cpass || ""}
                    onChange={handleInputChange}

                    /></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type='submit' /></td>
                </tr>
            </table>
        </form>
      </center>
    </div>
  )
}


export default Register
