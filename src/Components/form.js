

import React, { useState } from 'react'

function Form({getdata}) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [alert, setAlert] = useState("Alert")
    //const getWeight = (e)=>{
    const onSubmit = (e) => {
      e.preventDefault();
      if(isNaN(weight) || isNaN(height)){
        console.log("Not a valid input")
        setAlert(true)
      }else{
        getdata(weight,height)
        setAlert(false);
      }
     
    };
    //let alertMessage
    //if (alert){
      //  alertMessage= <div className='alert alert-danger' role="alert">Please enter valid datas</div>
   // }
     //else{
       // alertMessage='';
    //}
    
    return (
        <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg) :</label>
                <input type="text" value ={weight.weight} onChange={(e)=> setWeight(e.target.value)}  className="form-control" required/>
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Hight(m) :</label>
                <input type="text"  value ={height} onChange={(e)=> setHeight(e.target.value)} className="form-control" required/>
              </div>
            </div>
          </div>
          <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
        </form>
          {alert===true?<div className='alert alert-danger' role="alert">Please enter valid datas</div>:""}
      </div>
   

    );
  
}
  export default Form;

  //NOTE:
  //Terinary operator- it is use only when if else condition.
  //{alert===true?<div className='alert alert-danger' role="alert">Please enter valid datas</div>:""}
  
  //And operator- it is use only if case ie.only true case
  // {alert&&<div className='alert alert-danger' role="alert">Please enter valid datas</div>}
