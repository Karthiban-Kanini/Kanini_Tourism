// import './PackageForm.css'
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

function Packageform(){
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const fileName = e.target.files[0].name;
    setFile(fileName);
  };

  const handleFileLabel = () => {
    if (file) {
      return file;
    }
    return 'Drag file here or click the above button';
  };

  return (
    <div className="t_container TA_card-0 justify-content-center">
      <div className="TA_card-body px-sm-4 px-0">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 col">
            <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">Traveller Form</h3>
            <p className="mt-md-4 ml-md-0 ml-2 text-center text-sm-left">
            we are offering Adventurs tours .
            </p>
          </div>
        </div>
        <div className="row justify-content-center round">
          <div className="col-lg-10 col-md-12">
            <div className="TA_card shadow-lg TA_card-1">
              <div className="TA_card-body inner-TA_card">
                <Form onSubmit={(e) => e.preventDefault()}>

                  <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6 col-sm-12">

                  <div className="form-group">
                      <label >Agency ID</label>
                      <input type="text" className="form-control" id="Agency ID" placeholder="Agency ID" />
                    </div> 
                    
                    <div className="form-group">
                      <label >Agency Name </label>
                      <input type="text" className="form-control" id="Agency Name" placeholder="Agency Name" />
                    </div> 
                    

                    <div className="form-group">
                      <label >Mobile Number</label>
                      <input type="text" className="form-control" id="Mobile-Number" placeholder="" />
                    </div>

                    <div className="form-group">
                      <label >E-mail</label>
                      <input type="text" className="form-control" id="email" placeholder=" E-mail" />
                    </div>

                     <div className="form-group">
                      <label >Address</label>
                      <input type="text" className="form-control" id="Address" placeholder="Address" />
                    </div>
                    
                    <div className="form-group">
                      <label >City</label>
                      <input type="text" className="form-control" id="City" placeholder="City" />
                    </div>
                    
                    <div className="form-group">
                      <label >Country</label>
                      <input type="text" className="form-control" id="Country" placeholder="Country" />
                    </div>
                      
                    <div className="form-group">
                      <label >About</label>
                      <input type="text" className="form-control" id="About" placeholder="About" />
                    </div>
                
                  </div>

                  <div className="col-lg-5 col-md-6 col-sm-12">

                  <div className="form-group">
                      <label>Evaluate Budget</label>
                      <input type="text" className="form-control" id="Evaluate Budget" placeholder="Evaluate Budget" />
                    </div>

                    <div className="form-group">
                      <label>Days </label>
                      <input type="number" className="form-control" id="days" placeholder="Days" />
                    </div>
                   
                    <div className="form-group">
                      <label >Transport accommodation</label>
                      <input type="text" className="form-control" id="transport accommodation" placeholder="Transport accommodation" />
                    </div>

                    <div className="form-group">
                      <label >Food accommodation</label>
                      <input type="text" className="form-control" id="Food accommodation" placeholder="Food accommodation" />
                    </div>

                    <div className="form-group">
                      <label >Stay accommodation</label>
                      <input type="text" className="form-control" id="Stay accommodation" placeholder="Stay accommodation" />
                    </div>

                    <div className="form-group">
                      <label >Discount</label>
                      <input type="text" className="form-control" id="Discount" placeholder="Discount" />
                    </div>

                    <div className="form-group">
                      <label >Places</label>
                      <input type="text" className="form-control" id="Places" placeholder="Places" />
                    </div>
              
                  </div>
                </div>

                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 col-12">
                      <div className="form-group files">
                        <label className="my-auto">{handleFileLabel()}</label>
                        <input id="file" type="file" className="form-control" onChange={handleFileChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 col-12">
                      <div className="form-group">
                        <label >Message</label>
                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="5"></textarea>
                      </div>
                      <div className="row justify-content-end mb-5">
                        <div className="col-lg-4 col-auto">
                          <Button type="submit" variant="primary" className="btn-block">
                            <small className="font-weight-bold">Request a Quote</small>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packageform;