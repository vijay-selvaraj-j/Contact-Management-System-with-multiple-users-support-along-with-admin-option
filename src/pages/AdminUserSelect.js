import React, { useState, useEffect} from "react";
import fireDb from "../firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./AdminUserSelect.css";
import { toast } from 'react-toastify';
import delimg from '../images/delete-removebg-preview.png'
import editimg from '../images/edit-removebg-preview.png'

const HomePage = () => {
const [data, setData] = useState({});


const Navigate = useNavigate();
const [search, setSearch] = useState("");
const [sortedData, setSortedata] = useState([]);
const [sort, setSort] = useState(false);
  

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

let query = useQuery();
const username = query.get("name");



useEffect (() => {
    fireDb.child(`Users/Validation`).on("value", (snapshot) => {
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
  



      const redUser = (id) => {
        const usersel = data[id].name;
        Navigate(`/home?name=${usersel}`);
        
        };


  return (

    <div style={{ marginTop: "20px" }}>        
    <br/>
    <center><h1>Welcome Admin!</h1>
    <br/>
    <br/><br/>
    <h3>Select User</h3>
    </center>

    <table className="styled-table">
      <thead>
        <tr>
        <th style={{ textAlign: "center" }}>No.</th>
        <th style={{ textAlign: "center" }}>Name</th>
        {!sort && (
          <th style={{ textAlign: "center" }}>Action</th>
        )}
      </tr>
    </thead>
      <tbody>
      {Object.keys (data).map((id, index) => {
        return (
          
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{data[id].name}</td>
            <td>
                <button className="btn btn-edit" onClick={() => redUser(id)}>Details</button>
  
            </td>
          </tr>
      );
      })}
      </tbody>
    </table>
    


    </div>
   
    );
  };
export default HomePage;