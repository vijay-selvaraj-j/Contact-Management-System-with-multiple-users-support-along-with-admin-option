import React, {useState, useEffect} from 'react';
import {Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import './AddEditContacts.css';
import fireDb from '../firebase';
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  dob: "",
  gender: "",
  email: "",
  phno: "",
  org: "",
  job: "",
  addr: ""
}

  const AddEditContacts = () => {

  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
 
  const [mobile, setmobile] = useState("");
  const {name, email, phno, org, job, addr, dob, gender} = state;
  const Navigate = useNavigate();

  const useQuery = () => {
      return new URLSearchParams(useLocation().state);
  }

  const useQuery23 = () => {
    return new URLSearchParams(useLocation().search);
}
  
let query = useQuery();
const username = query.get("name");
const id = query.get("id")

let query2 = useQuery23();
const username1 = query2.get("name");
  

useEffect (() => {
fireDb.child(`Users/${username}`).on("value", (snapshot) => {
if (snapshot.val() !== null) {
setData({...snapshot.val() });
} else {
setData({});
}
});
return () => {
setData({});
};
}, [id]);


useEffect(() => {
  if(id) {
  setState({ ... data[id] });
  } 
  else {
  setState({ ...initialState });
  }

  return () => {
  setState({ ...initialState });
  };
  }, [id, data]);
  

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
    };


    const handleSubmit = (e) => {
      e.preventDefault();
    if (phno.length > 10 || phno.length < 10) {
      toast.error("Invalid Mobile Number");
    }
    else{
      if (!name ||!dob || !gender || !email || !phno || !org || !job || !addr) {
      toast.error("Please enter all the values");
      } 
      else {
        if(!id){
          fireDb.child(`Users/${username1}`).push(state, (err) => {
            if (err) {
            toast.error(err);
            } else {
            toast.success("Contact Added Successfully!!!");
            }
            });
            setTimeout(() => Navigate(`/home?name=${username1}`), 500);
        }
      else{
        fireDb.child(`Users/${username}/${id}`).set(state, (err) => {
          if (err) {
          toast.error(err);
          } else {
          toast.success("Contact Updated Successfully!!!");
          }
          });
          setTimeout(() => Navigate(`/home?name=${username}`), 500);
      }
      }
    }
      };

  
  return (
    <div style={{marginTop: '50px'}}>
      <center>
      <form style={{margin: '',
       padding: '30px',
      maxWidth: '400px', 
      alignContent: 'center'
      }}
      onSubmit={handleSubmit}
      >
        <table>
          <tr>
            <td>
          <label htmlFor='name'>Name</label>
          </td>
          <td>
          <input 
          type='text'
          id='name'
          name='name'
          placeholder='Enter Your Name'
          value={name || ""}
          onChange={handleInputChange}
          />
          </td>
          </tr>


          <tr>
  <td>
<label htmlFor='dob'>Date of Birth</label>
</td>
<td>
          <input 
          type='date'
          id='dob'
          name='dob'
          placeholder='Enter Your DOB'
          value={dob || ""}
          onChange={handleInputChange}
          /></td>
</tr>



<tr>
  <td>
<label htmlFor='gender'>Gender</label>
</td>
<td>
          <input 
          type='text'
          id='gender'
          name='gender'
          placeholder='Gender (Male/Female/Others)'
          value={gender || ""}
          onChange={handleInputChange}
          /></td>
</tr>







<tr>
  <td>
<label htmlFor='email'>Email</label>
</td>
<td>
          <input 
          type='email'
          id='email'
          name='email'
          placeholder='Enter Your Email Address'
          value={email || ""}
          onChange={handleInputChange}
          /></td>
</tr>
<tr>
  <td>
<label htmlFor='phno'>Contact</label></td>
<td>
           <input
                type="number"
                id='phno'
                name='phno'
                placeholder='Enter Your Contact Number'
                value={phno || ""}
                onChange={handleInputChange}
            />
          </td>
</tr>

<tr>
  <td>
<label htmlFor='org'>Organization</label></td>
<td>
          <input 
          type='text'
          id='org'
          name='org'
          placeholder='Enter Your Oranization Name'
          value={org || ""}
          onChange={handleInputChange}
          />
          </td>
</tr>

<tr>
  <td>
<label htmlFor='job'>Job Title</label></td>
<td>
          <input 
          type='text'
          id='job'
          name='job'
          placeholder='Enter Your Job Title'
          value={job || ""}
          onChange={handleInputChange}
          />
          </td>
</tr>


<tr>
  <td>
<label htmlFor='addr'>Address</label></td>
<td>
          <input 
          type='text'
          id='addr'
          name='addr'
          placeholder='Enter Your Address'
          value={addr || ""}
          onChange={handleInputChange}
          />
          </td>
</tr>


<tr><td colSpan='2'> </td></tr>
<tr >
  <td colspan='2'>
      <input type='submit' value={id ? "Update" : "Save"} />
      </td>
      </tr>
      </table>
      </form>
      </center>
      
    </div>
  )
}

export default AddEditContacts
