import React, {useState, useEffect} from 'react'
import {useLocation, Link} from "react-router-dom";
import fireDb from "../firebase";
import './SearchName.css'
import { toast } from 'react-toastify';


const SearchName = () => {

 

const [data, setData] = useState({});

const useQuery = () => {
    return new URLSearchParams(useLocation().state);
}

let query = useQuery();
const search = query.get("se");
const username = query.get("username");
const recDropVal = query.get("dropValue");
console.log(search,username,recDropVal);

useEffect(() => {
    searchData();
}, [search])

const searchData = () => {
    fireDb
    .child(`Users/${username}`)
    .orderByChild(recDropVal)
    .equalTo(search)
    .on("value", (snapshot) => {
        if(snapshot.val())
        {
            const data = snapshot.val();
            setData(data);
            console.log("setdata",data);
        }
        
    })
}

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {Object.keys(data).length === 0 ?
         (
          <center><h2>Not Found!!!</h2></center>
        ) : 
        (
          <table className="styled-table">
  <thead>
    <tr>
    <th style={{ textAlign: "center" }}>No.</th>
    <th style={{ textAlign: "center" }}>Name</th>
    <th style={{ textAlign: "center" }}>Email</th>
    <th style={{ textAlign: "center" }}>Contact No.</th>
    <th style={{ textAlign: "center" }}>Organization</th>
    <th style={{ textAlign: "center" }}>Job Title</th>
    <th style={{ textAlign: "center" }}>Address</th>
  
  </tr>
</thead>
<tbody>
{Object.keys (data).map((id, index) => {
  return (
    <tr key={id}>
      <th scope="row">{index + 1}</th>
      <td>{data[id].name}</td>
      <td>{data[id].email}</td>
      <td>{data[id].phno}</td>
      <td>{data[id].org}</td>
      <td>{data[id].job}</td>
      <td>{data[id].addr}</td>
    </tr>
);
})}
</tbody>
</table>
        )
        }


</div>
    </>
  )
}

export default SearchName
