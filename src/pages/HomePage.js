import React, { useState, useEffect} from "react";
import fireDb from "../firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./HomePage.css";
import { toast } from 'react-toastify';
import delimg from '../images/delete-removebg-preview.png'
import editimg from '../images/edit-removebg-preview.png'

const HomePage = () => {
const [data, setData] = useState({});


const Navigate = useNavigate();
const [search, setSearch] = useState("");
const [sortedData, setSortedata] = useState([]);
const [sort, setSort] = useState(false);
var val, dropValue;
  

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

let query = useQuery();
const username = query.get("name");



useEffect (() => {
    fireDb.child(`Users/${username}`).on("value", (snapshot) => {
    if (snapshot.val() !== null) {
    setData({ ...snapshot.val() });
    } else {
    setData({});
    }
    });
    return () => {
    setData({});
    };
    }, []);
  
    const onDelete = (id) => {
      if (
        window.confirm("Confirm Delete Contact?")
      ) {
      fireDb.child(`Users/${username}/${id}` ).remove((err) => {
      if (err) {
      toast.error(err);
      } else {
      toast.success("Contact Deleted Successfully");
      }
      });
      }
      };


      const handleSubmit= (e) => {
        e.preventDefault();
        Navigate("/search",{state: {name:search, username: username}});
        setSearch("");
        };

        const AddCon= (e) => {
          e.preventDefault();
          Navigate(`/add?name=${username}`);

          };
  

        const handleChange = (e) => {
            setSort(true);
           fireDb
            .child(`Users/${username}`)
            .orderByChild(`${e.target.value}`)
            .on("value", (snapshot) => {
              let sortedData = [];
              snapshot.forEach((snap) => {
                sortedData.push(snap.val());
              });
              setSortedata(sortedData);          
            })
        };

        const handleReset = () => {
            setSort(false);
        };

        const updateCon = (id) => {
        
          Navigate("/add",{state: {name: username, id: id}})

        }

        const handleDet = (e) => {
          val = e.target.value;
          console.log(val);


        }

        const handleSearchNew = (e) =>
        {
            e.preventDefault();
            Navigate("/search",{state: {se: search, username: username, dropValue: val}})
        }



  return (

    <div style={{ marginTop: "20px" }}>

    <form onSubmit={handleSubmit} style={{display: "inline",  padding: '20px'}}>
      <input 
      type="text"
      className="inputField"
      placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
    </form>
    <br/>

    <select className = "dropdown" name  = "newSearchDrop" onChange={handleDet}>
    <option>Select Option</option>
    <option value="name">Name</option>
    <option value="phno">Contact</option>
    <option value = "email">Email</option>
    </select>
    <br/>


    <button onClick={handleSearchNew} className="btn-reset" padding="30px">
      Submit
    </button>
    <center><h1>Hello {username}!</h1><label>Sort By:</label>
    <select className="dropdown" name="colValue" onChange={handleChange}>
      <option>Select Option</option>
      <option value="name">Name</option>
      <option value="email">Email</option>
      <option value="org">Organization</option>

    </select>
    <button className="btn btn-reset" onClick={handleReset}>Reset</button>
    <br/><br/>
    </center>

    <table className="styled-table">
      <thead>
        <tr>
        <th style={{ textAlign: "center" }}>No.</th>
        <th style={{ textAlign: "center" }}>Name</th>
        <th style={{ textAlign: "center" }}>D.O.B</th>
        <th style={{ textAlign: "center" }}>Gender</th>
        <th style={{ textAlign: "center" }}>Email</th>
        <th style={{ textAlign: "center" }}>Contact No.</th>
        <th style={{ textAlign: "center" }}>Organization</th>
        <th style={{ textAlign: "center" }}>Job Title</th>
        <th style={{ textAlign: "center" }}>Address</th>
        {!sort && (
          <th style={{ textAlign: "center" }}>Options</th>
        )}
      </tr>
    </thead>
    {!sort && (
      <tbody>
      {Object.keys (data).map((id, index) => {
        return (
          
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{data[id].name}</td>
            <td>{data[id].dob}</td>
            <td>{data[id].gender}</td>
            <td>{data[id].email}</td>
            <td>{data[id].phno}</td>
            <td>{data[id].org}</td>
            <td>{data[id].job}</td>
            <td>{data[id].addr}</td>
            <td>
                <button className="btn btn-edit" onClick={() => updateCon(id)}>
                  <img src={editimg} width='20px' height='20px' /></button>
                
                <button className="btn btn-delete"
                onClick={() => onDelete(id)}
                ><img src={delimg} width='20px' height='20px' /></button>
  
            </td>
          </tr>
      );
      })}
      </tbody>
    )}


    {sort && (
        <tbody>
          {sortedData.map((item, index) => {
            return(
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phno}</td>
            <td>{item.org}</td> 
            <td>{item.job}</td>
            <td>{item.addr}</td>
          </tr>
            );
          })}
        </tbody>
    )}
    </table>
    
    <center><button className="btn btn-reset" onClick={AddCon}>Add Contact</button></center>


    </div>
   
    );
  };
export default HomePage;