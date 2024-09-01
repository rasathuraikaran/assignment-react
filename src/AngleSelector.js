import React, { useState } from "react";

function AngleSelector() {
 const [angle, setAngle] = useState(0);

 const handleInputChange = (e) => {
  let value = parseInt(e.target.value) || 0;
  value = Math.min(Math.max(value, 0), 360);
  setAngle(value);
 };

 const handleSliderChange = (e) => {
  setAngle(e.target.value);
 };

 const handleRadioChange = (e) => {
  setAngle(e.target.value);
 };

 return (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
   <h2>Angle Selector</h2>
   <input
    type="number"
    value={angle}
    onChange={handleInputChange}
    min="0"
    max="360"
   />
   <br />
   <br />
   <div style={{ margin: "20px 0" }}>
    <input
     type="range"
     min="0"
     max="360"
     value={angle}
     onChange={handleSliderChange}
    />
   </div>
   <div style={{ margin: "20px 0" }}>
    {[0, 45, 60, 90, 180].map((val) => (
     <label key={val}>
      <input
       type="radio"
       name="angle"
       value={val}
       checked={angle == val}
       onChange={handleRadioChange}
      />
      {val}°
     </label>
    ))}
   </div>
  </div>
 );
}

export default AngleSelector;
