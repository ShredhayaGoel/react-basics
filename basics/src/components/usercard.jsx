import React from "react";
const Usercard = (props) => {
  console.log("Image1 is:", props.image1);
  console.log("Image is:", props.image);
  return (
    <div>
      <h1>{props.name} </h1>
      <p>
        MEET MR {props.name} {props.desc}
      </p>{" "}
      {/*
      <p style={{ display: "hidden" }}>
         props.image1 is undefine as in app.js i write image = {} so it is
        returning image and error is not coming in this :
      </p> */}
      <img src={props.image1} style={{ border: "5px solid red" }}></img>
      */ props.image1 is undefine as in app.js i write image = {} so it is
      returning image and error is not coming in this :
      <img src={props.image} style={{ border: "5px solid blue" }}></img>
    </div>
  );
};

export default Usercard;
