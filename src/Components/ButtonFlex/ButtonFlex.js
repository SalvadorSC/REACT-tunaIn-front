import React from "react";
import "./ButtonFlex.css";

//Here you may define the name of each button style.
const STYLESBUTTON = [
      "btn--primary--solid",
      "btn--icon--outline",
      "btn--icon--outline:active",
      "btn--iconClicked--outline",
];
// Here you may define the name of each button size.
const SIZESBUTTON = [
      /* e.g "Btn--small", "Btn--standard"*/
];

const EFFECTSBUTTON = [
      "btn--primary--solid",
      "btn--icon--outline:active",

];
// MAIN COMPONENT.
export const Button = ({
      children,
      type,
      onClick,
      buttonStyle,
      buttonSize,
      buttonEffect
}) => {



      const checkButtonStyle = STYLESBUTTON.includes(buttonStyle)
            ? buttonStyle
            : STYLESBUTTON[0];


      const checkButtonSize = SIZESBUTTON.includes(buttonSize)
            ? buttonSize
            : SIZESBUTTON[0];

      const checkButtonEffect = EFFECTSBUTTON.includes(buttonEffect)
            ? buttonEffect
            : EFFECTSBUTTON[0];

      return (
            <button
                  className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                  onClick={onClick}
                  type={type}
                  id={`btn ${checkButtonEffect}`}
            >
                  {children}
            </button>

      );
};