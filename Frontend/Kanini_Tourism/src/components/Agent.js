
import React from "react"
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

function Agent(){

    const[Agent,setAgent]=useState([
        {
            "agentId"	:0,
            "users"	:"",
            "name"	:"",
            "dateOfBirth":"",
            "gender":"",
            "phone"	:"",
            "agencyID":0,
            "agencyName":"",
            "email"	:"",
            "address":"",
            "isApproved" :"",
            "gsTnumber" :""
        }]
    );

    const ApprovalStatus=(email,status)=>{
        if (status==="Approved"){
            status="Not approved"
        }
        else{
            status="Approved"
        }
        const [StatusData,setStatus]=useState({
            "agentEmail":"",
            "status":""
        })
        setStatus({...StatusData,"agentEmail":email,"status":status})
        fetch("http://localhost:5299/api/Account/UpdateAgentStatus",{
            method:"PUT",
            headers: {
                accept: "text/plain",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...StatusData, "StatusData": {} }),
        })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
    };

    const View = () => {
        fetch("http://localhost:5299/api/Account/GetAllAgents", {
            method: "GET",
            headers: {
              accept: "text/plain",
            //   'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
                setAgent(myData);
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
    };

    useEffect(() => {
        View();
      },2000);

return(
    <div>
        <h1 className="list-head">Agents</h1>
    <main>
    <table>
            <tr>
            <th>Agent ID</th>
            <th>Name</th>
            <th>Agency Name City</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            </tr>
            { Agent.map((user) => (
                    <tr>
                <td>{user.agentId}</td>
                <td>{user.name}</td>
                <td>{user.agencyName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><button /*onClick={ApprovalStatus(user.email,user.isApproved)}*/>{user.isApproved}</button></td>
             </tr>
            ))} 
    </table>
    </main>
    </div>
);
            }

export default Agent;