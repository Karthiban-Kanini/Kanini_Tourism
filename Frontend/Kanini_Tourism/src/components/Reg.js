import './Reg.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//import 'bootstrap/dist/css/bootstrap.min.css';

function Reg() {
  const [Traveler, setTraveler] = useState({
    "travellerId": 0,
    "user": {},
    "name": "",
    "dateOfBirth": "",
    "gender": "",
    "phone": "",
    "email": "",
    "address": "",
    "passwordClear": ""
  });
  const [Agent, setAgent] = useState({
    "agentId": 0,
    "user": {},
    "name": "",
    "dateOfBirth": "",
    "gender": "",
    "phone": "",
    "agencyId": "",
    "agencyName": "",
    "email": "",
    "address": "",
    "isApproved":"",
    "gsTnumber": "",
    "passwordClear": ""
  });
  const navigate = useNavigate();

  const registerTraveler = () => {
    // Check if all fields are filled
    if (
      !Traveler.name ||
      !Traveler.dateOfBirth ||
      !Traveler.phone ||
      !Traveler.email ||
      !Traveler.gender ||
      !Traveler.address ||
      !Traveler.passwordClear
    ) {
      // toast.warning("Please fill in all the fields");
      alert("Please fill in all the fields");
      return;
    }

    console.log(Traveler);

    fetch("http://localhost:5299/api/Account/RegisterTraveller", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...Traveler, "Traveler": {} })
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        localStorage.setItem("id", myData.userId);
        localStorage.setItem("email", myData.email);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        // toast.success("Registered Successfully!!");
        navigate("/Home");
      })
      .catch((err) => {
        // toast.error("Error occured,Kindly retry again !!")
        alert("Error occured,Kindly retry again !!")
        console.log(err.error);
      });
  };

  const registerAgent = () => {
    console.log(Agent);
    // Check if all fields are filled
    if (
      !Agent.name ||
      !Agent.dateOfBirth ||
      !Agent.phone ||
      !Agent.email ||
      !Agent.gender ||
      !Agent.address ||
      !Agent.agencyId ||
      !Agent.agencyName ||
      !Agent.gsTnumber ||
      !Agent.passwordClear) {
      // toast.warning("Please fill in all the fields");
      alert("Please fill in all the fields");
      return;
    }

    console.log(Agent);

    fetch("http://localhost:5299/api/Account/RegisterAgent", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...Agent, "Agent": {} })
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        localStorage.setItem("id", myData.userId);
        localStorage.setItem("email", myData.email);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        // toast.success("Registered Successfully!!");
        navigate("/ViewPackages");

      })
      .catch((err) => {
        // toast.error("Error occured,Kindly retry again !!")
        alert("Error occured,Kindly retry again !!")
        console.log(err.error);
      });
  };

    const [activeTab, setActiveTab] = useState('Agent');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (

<div className ="container1 register">
    <div className ="row">
        <div className ="col-md-3 register-left">
            <img src="https://i.ibb.co/LQDsWDp/Screenshot-210.png" alt=" " />
            <h2>Welcome to Kanini Tourism</h2><br/>
            <h6>It's never too late to be what you might have been, start your adventure !</h6>
            <br/>
            <p>If you are one amoung us , Click Login button and login</p>
            <Link to="/login"><button>Login</button></Link>

        </div>


        <div className ="col-md-9 register-right">

            <ul className ="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className ="nav-item">
                <a className={`nav-link ${activeTab === 'Agent' ? 'active' : ''}`}  onClick={() => handleTabChange('Agent')}  role="tab"  aria-selected={activeTab === 'Agent'} >
                Agent
              </a>

                </li>
                <li className ="nav-item">
                <a className={`nav-link ${activeTab === 'Traveler' ? 'active' : ''}`} onClick={() => handleTabChange('Traveler')} role="tab" aria-selected={activeTab === 'Traveler'} >
                Traveler
              </a>

                </li>
            </ul>
            
            <div className ="tab-content" id="myTabContent">
            <div className={`tab-pane fade show ${activeTab === 'Agent' ? 'active' : ''}`} id="reg" role="tabpanel">
            
                    <h3 className ="register-heading">Register as an Agent</h3>
                    <div className ="row register-form">
                        <div className ="col-md-6"> 

                          <input onChange={(event)=>{setAgent({...Agent,"name":event.target.value})}} type="text"   required className="input form-control" placeholder="Name" /><br/>
                          <input onChange={(event)=>{setAgent({...Agent,"passwordClear":event.target.value})}} type="password"   required className="input form-control"  placeholder="Password" /><br/>
                          <input onChange={(event)=>{setAgent({...Agent,"dateOfBirth":event.target.value})}} type="date"   required className="input form-control" placeholder="Date Of Birth" /><br/>
                          <input onChange={(event)=>{setAgent({...Agent,"phone":event.target.value})}} type="number" minlength="10" maxlength="10" required className="input form-control" placeholder='Mobile number' /><br/>
                          <input onChange={(event)=>{setAgent({...Agent,"address":event.target.value})}} type="text"  required className="input form-control"  placeholder='Address' /><br/>

                          {/* <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"name":event.target.value})}} placeholder="Name" /> */}

                 
                        </div>
                        <div className ="col-md-6">

                           <input onChange={(event)=>{setAgent({...Agent,"email":event.target.value})}} type="text"required className="input form-control" placeholder='Email' /><br/>
                            <select onChange={(event)=>{setAgent({...Agent,"gender":event.target.value})}} className="input form-control">
                            <option selected=""> Select Gender</option> <option>Male</option> <option>Female</option> <option>Others</option>
                            </select>     <br/>             
                           <input onChange={(event)=>{setAgent({...Agent,"agencyId":event.target.value})}} type="text"   required className="input form-control" placeholder="Agency ID" /><br/>
                           <input onChange={(event)=>{setAgent({...Agent,"agencyName":event.target.value})}} type="text"   required className="input form-control" placeholder="Agency Name" /><br/>
                           <input onChange={(event)=>{setAgent({...Agent,"gsTnumber":event.target.value})}} type="number" minlength="10" maxlength="10" required className="input form-control" placeholder='GSTN Number' /><br/>


                           <input type="submit" onClick={registerAgent} className ="btnRegister" value="Register" />
                        </div>

                    </div>

                </div>

                
                <div  className={`tab-pane fade show ${activeTab === 'Traveler' ? 'active' : ''}`}  id="profile"  role="tabpanel">
        
                    <h3 className ="register-heading">Register as a Traveler</h3>
                    <div className ="row register-form">
                    <div className ="col-md-6"> 

                           <input onChange={(event)=>{setTraveler({...Traveler,"name":event.target.value})}} type="text"  required className="input form-control" placeholder="Name" /> <br/>
                           <input onChange={(event)=>{setTraveler({...Traveler,"passwordClear":event.target.value})}} type="password"   required className="input form-control"  placeholder="Password" /><br/>
                           <input onChange={(event)=>{setTraveler({...Traveler,"dateOfBirth":event.target.value})}} type="date"   required className="input form-control" placeholder="Date Of Birth" /><br/>
                           <input onChange={(event)=>{setTraveler({...Traveler,"phone":event.target.value})}} type="number" minlength="10" maxlength="10" required className="input form-control" placeholder='Mobile number' />

                         {/* <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"name":event.target.value})}} placeholder="Name" /> */}
                    </div>


                    <div className ="col-md-6">
                        <input onChange={(event)=>{setTraveler({...Traveler,"email":event.target.value})}} type="text"required className="input form-control" placeholder='Email' /><br/>
                           <select onChange={(event)=>{setTraveler({...Traveler,"gender":event.target.value})}} className="input form-control">
                            <option selected=""> Select Gender</option> <option>Male</option> <option>Female</option> <option>Others</option>
                            </select>     <br/>             
                           <input onChange={(event)=>{setTraveler({...Traveler,"address":event.target.value})}} type="text"  required className="input form-control"  placeholder='Address' /><br/>
                              
                            <input type="submit" onClick={registerTraveler} className ="btnRegister" value="Register" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Reg;