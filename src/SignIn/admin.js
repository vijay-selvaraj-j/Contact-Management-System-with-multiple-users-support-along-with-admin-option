import './signin.css'
import React, {useState as US, useEffect} from 'react';
import fireDb from '../firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate as UN} from "react-router-dom";

const initialState = {
    pass: ""
  }

const admin = () => {


    const Navigate = UN();

    const [state, setState] = US(initialState);
    const [data, setData] = US({});
    
  var actpass;

    const handleAdmin = (e) => {
        e.preventDefault();
        
          if (!pass) {
          toast.error("Please enter all the values");
          } 
          else {
              if(pass === "admin123")
              {
                Navigate('/adusersel');
              }
              else {
                  toast.error("Invalid Password");
              }
            }
        
        };

        
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
    };


        const {name, pass} = state;

  const Admin = () => {

  }


  return (
    <div>
      <center>
        <br/>
        <br/>
        <h1>Hello Admin!</h1>
        <br /><br/><br/><br/><br/>
        <h3>Enter Password to Continue</h3>
        
        <form style={{margin: '',
       padding: '30px',
      maxWidth: '400px', 
      alignContent: 'center'
      }}
      onSubmit={handleAdmin}>
            <table>
               
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
                    <td colSpan={2}><input type='submit' /></td>
                </tr>
                
            </table>
        </form>
        <br/>

      </center>
    </div>
  )
}

export default admin
