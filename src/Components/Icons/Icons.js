import React from "react";
import "./Icon.css";

//Here you may define the name of each Icon style.
const STYLESICON = [
     
      
];
// Here you may define the name of each Icon size.
const SIZESICON = [
      
];
// MAIN COMPONENT.
export const Icon = ({
       iconStyle,
       iconSize
}) => {


const checkIconStyle = STYLESICON.includes(iconStyle)
        ? iconStyle 
        : STYLESICON[0];

       
const checkIconSize = SIZESICON.includes(iconSize) 
        ? iconSize 
        : SIZESICON[0]; 

  return (
    <i className={` ${checkIconStyle} ${checkIconSize}`}></i>
  );
}