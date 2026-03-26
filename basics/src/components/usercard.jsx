import React from "react";
const Usercard = (props) => {
  console.log("Image1 is:", props.image1);
  console.log("Image is:", props.image);
  return (
    <div>
      <h1>{props.name} </h1>
      <p>
        MEET MR {props.name} {props.desc}
      </p>
      <img src={props.image1} style={{ border: "5px solid red" }}></img>
      <img src={props.image} style={{ border: "5px solid blue" }}></img>
    </div>
  );
};

export default Usercard;
