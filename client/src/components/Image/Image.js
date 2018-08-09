import React from "react";
const Image = (props) => (
  <div onMouseEnter={props.onMouseEnter} className ="box" id = {props.charName} >  
    <img id = {props.charName} className ="image" src = {props.image} alt ={props.charName}/>
  </div>   
);
export default Image;