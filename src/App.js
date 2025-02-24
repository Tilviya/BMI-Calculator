import Form from "./Components/form";
import Score from "./Components/score";
import BMIList from "./Components/bmi list";
import { useState } from "react";

function App() {
  const [bmi, setbmi] = useState(0);
  const [bmitype, setbmiType] = useState("overweight");
  const onFormdata = (w, h,) => {
    let b =bmiCal(w,h);
    setbmi(b);
    let t = typeCal(b);
    setbmiType(t);

    console.log(t,"your bmi",b,"height and weight", w,h);
    
  };
  

  const bmiCal = (w, h) => {
    return (w/(h * h)).toFixed(2);
   console.log("BMI IS",bmiCal); 
};
  const typeCal = (bmi) => {
    if (bmi<18.9){
      return "Under Weight"
  }  else if(bmi>18.9 && bmi<29.9){
      return "Normal"
  }  else if (24.9 < bmi && bmi < 29.9) {
    return "Over Weight";
  } else if (29.9 < bmi && bmi < 34.9) {
    return "Obesity Class I";
  } else if (34.9 < bmi && bmi < 39.9) {
    return "Obesity Class II";
  } else if (bmi > 39.9) {
    return "Obesity Class III";
  }
};



    // const [bcal, setbcal] = useState(00);
    
  // const [bmiscore,setbmiscore]=useState("00");
  // const bmical =(w,h)=>w+h;
  // console.log(bmical);


  // let bmi =18;
  //const changebmi =() =>{
  //setbmi=19;
  //setbmi(19 +bmi)
  //console.log(bmi)
  //}

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getdata={onFormdata} />
        </div>

      <div className="row justify-content-center mt-5">
        <div className=" col-12 col-sm-6 mb-5">
          <Score bmiNo={bmi} bmiName={bmitype} /> 
          </div>

          <div className=" col-12 col-sm-6 ">
              <BMIList/>
            </div>
          </div>
      </div>
    </>
  );
}
export default App;
