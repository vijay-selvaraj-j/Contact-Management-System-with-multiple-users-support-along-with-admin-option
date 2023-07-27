import './signin.css'
import React, {useState as US, useEffect} from 'react';
import fireDb from '../firebase';
import { toast } from 'react-toastify';
import { Link, useNavigate as UN} from "react-router-dom";

const initialState = {
    name: "",
    pass: ""
  }

const signin = () => {


    const Navigate = UN();

    const [state, setState] = US(initialState);
    const [data, setData] = US({});
    
  var actpass;

    const handleSubmit = (e) => {
        e.preventDefault();
        
          if (!name || !pass) {
          toast.error("Please enter all the values");
          } 
          else {
            fireDb.child(`Users/Validation`).orderByChild('name').equalTo(name).once("value",
            function(snapshot){
              snapshot.forEach((recpass) => {
                let pa = recpass.val();
                actpass = pa['pass'];
              if(!actpass)
              {
                toast.error("Username not found!!!");
              }
              else {
                if(pass === actpass)
                {
                      Navigate(`/home?name=${name}`);
                }
                else{
                  toast.error("Invalid Password");
                }
              }
                
              });
            }) 
                   
            
              
            }
        
        };

        
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
    };


        const {name, pass} = state;

  const Admin = (e) => {
    e.preventDefault();
    Navigate(`/admin?name=${name}`);

  }


  return (
    <div>
      <center>
        <br/>
        <br/>
        <h1>SignIn Page</h1>
        <br/><br/>
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
                    <td colSpan={2}><input type='submit' /></td>
                </tr>
                <tr>
                  <td colSpan={2}><center><Link to="/reg">New User? Register</Link></center></td>
                </tr>
            </table>
        </form>
        <br/>

        <center><button className="btn btn-reset" onClick={Admin}>Admin?</button></center>
      </center>
    </div>
  )
}

export default signin
