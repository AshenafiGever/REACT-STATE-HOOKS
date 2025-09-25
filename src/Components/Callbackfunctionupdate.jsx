import React, { useState } from "react";

function Callbackfunctionupdate() {
  const [car, setCar] = useState({
    brand: "Ford",
    Model: "Mustang",
    year: "1964",
    color: "red",
    image:
      "https://images-stag.jazelc.com/uploads/garycrossleyford-m2en/Screen-Shot-2023-08-10-at-7.57.48-AM-1024x590.png",
  });
  const updateColor=()=>{
//     setCar({color:"blue",
//       image: "https://i.ytimg.com/vi/hwhVza9y0QU/maxresdefault.jpg"
// //wrong way--> never update state directly!! right work on some situiation ,but it is not recommeded.(we will lose all other data)
//RIGHT WAY rather we have to use callback function is the right to not lose previous date
setCar((prevState)=>({...prevState,color:"blue",
image: "https://i.ytimg.com/vi/hwhVza9y0QU/maxresdefault.jpg"
   }) );
  };
  return (
    <div>
      <h1>WHY using CALLBACK function is good when updating states</h1>
      <h2>My{car.brand}</h2>
      <h2>
        It is a <span className={car.color}>{car.color}</span>
        {car.Model}
        {car.year}.
      </h2>
      <div>
        <img src={car.image} alt="" width="50%" />
      </div>
      <button type="button" onClick={updateColor}>
        change color to blue
      </button> 
    </div>
  );
}

export default Callbackfunctionupdate;
