import './Reg.css';
import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
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
            <h6> KARTHIBAN Platform</h6>
            <br/>
            <p>Please register here.</p> <br/>
            <p>If user Click  LOgin button over here</p>
            <input type="submit" name="" value="Login" />

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
            <div className={`tab-pane fade show ${activeTab === 'Agent' ? 'active' : ''}`} id="home" role="tabpanel">
            
                    <h3 className ="register-heading">Register as an Agent</h3>
                    <div className ="row register-form">
                        <div className ="col-md-6"> 

                          <input type="text"   required className="input form-control" placeholder="Name" /><br/>
                          <input type="password"   required className="input form-control"  placeholder="Password" /><br/>
                          <input type="date"   required className="input form-control" placeholder="Date Of Birth" /><br/>
                          <input type="number" minlength="10" maxlength="10" required className="input form-control" placeholder='Mobile number' /><br/>
                          <input type="text"  required className="input form-control"  placeholder='Address' /><br/>

                          {/* <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"name":event.target.value})}} placeholder="Name" /> */}

                 
                        </div>
                        <div className ="col-md-6">

                           <input type="text"required className="input form-control" placeholder='Email' /><br/>
                            <select className="input form-control">
                            <option selected=""> Select Gender</option> <option>Male</option> <option>Female</option> <option>Others</option>
                            </select>     <br/>             
                           <input type="text"   required className="input form-control" placeholder="Agency ID" /><br/>
                           <input type="text"   required className="input form-control" placeholder="Agency Name" /><br/>
                           <input type="number" minlength="10" maxlength="10" required className="input form-control" placeholder='GSTN Number' /><br/>


                           <input type="submit" className ="btnRegister" value="Register" />
                        </div>

                    </div>

                </div>

                
                <div  className={`tab-pane fade show ${activeTab === 'Traveler' ? 'active' : ''}`}  id="profile"  role="tabpanel">
        
                    <h3 className ="register-heading">Register as a Traveler</h3>
                    <div className ="row register-form">
                    <div className ="col-md-6"> 

                           <input type="text"   required className="input form-control" placeholder="Name" /> <br/>
                           <input type="password"   required className="input form-control"  placeholder="Password" /><br/>
                           <input type="date"   required className="input form-control" placeholder="Date Of Birth" /><br/>
                           <input type="number" minlength="10" maxlength="10" required className="input form-control" placeholder='Mobile number' />

                         {/* <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"name":event.target.value})}} placeholder="Name" /> */}
                    </div>


                    <div className ="col-md-6">
                        <input type="text"required className="input form-control" placeholder='Email' /><br/>
                           <select className="input form-control">
                            <option selected=""> Select Gender</option> <option>Male</option> <option>Female</option> <option>Others</option>
                            </select>     <br/>             
                           <input type="text"  required className="input form-control"  placeholder='Address' /><br/>
                              
                            <input type="submit" className ="btnRegister" value="Register" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Register;
