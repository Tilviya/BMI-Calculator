import Form from "./Components/form";
import Score from "./Components/score";
import BMIList from "./Components/bmi list";
import { useState } from "react";

function App() {
  const [goalBmi, setGoalbmi] = useState({ type: "", weigt: "" });
  const [bmi, setbmi] = useState(0);
  const [bmitype, setbmiType] = useState("overweight");
  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normalweight: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityclassI: { low: "", high: "" },
    obesityclassII: { low: "", high: "" },
    obesityclassIII: { high: "" },
  });
  const onFormdata = (w, h) => {
    let b = bmiCal(w, h);
    setbmi(b);
    let t = typeCal(b);
    setbmiType(t);

    const range = {
      underWeight:  { low: calWeight(18.5, h) },
      normalweight: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityclassI: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityclassII: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityclassIII: { high: calWeight(40, h) },
    };
    setBmiRang(range);

    setGoalbmi(weightChange(b, w, range));
  };

  const bmiCal = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };
  const calWeight = (b, h) => (b * h * h).toFixed(2);

  const weightChange = (b, w, range) => {
    let changeobj;
    if (b > 24.9) {
      changeobj = {
        weigt:  (w - range.normalweight.high).toFixed(2),
        type: "positive",
      };
      return changeobj;
    } else if (b < 18.5) {
      changeobj = {
        weigt: (range.normalweight.low - w).toFixed(2),
        type: "negative",
      };
      return changeobj;
    } else {
      changeobj = { weigt: 0, type: "normal" };
      return changeobj;
      
    }
   
  };
  console.log( "ggg",weightChange)

  const typeCal = (bmi) => {
    if (bmi < 18.9) {
      return "Under Weight";
    } else if (bmi > 18.9 && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
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
            <Score bmiNo={bmi} bmiName={bmitype} uu={goalBmi} />
          </div>

          <div className=" col-12 col-sm-6 ">
            <BMIList range={bmiRange} bmi={bmi} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
