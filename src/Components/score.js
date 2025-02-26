

function Score({ bmiNo, bmiName, uu}) {

  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {uu.type === "positive" && (
        <div className="fs-4">"You need lose <span className="fw-bold">{uu.weigt} kg"</span> </div>
      )}
      {uu.type === "negative" && (
        <div className="fs-4">"You need gain <span className="fw-bold">{uu.weigt} kg"</span> </div>
      )}
       {uu.type === "normal" && (
        <div className="fs-4">"Your weight is Normal,Good for you" </div>
      )}
    </div>  
    
  );
}

export default Score;