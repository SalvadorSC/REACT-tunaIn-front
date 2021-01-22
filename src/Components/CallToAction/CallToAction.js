import React from 'react'
import './CallToAction.css';

export const CallToAction = ({ title, text1, text2, buttonText }) => {
  return (
    <div className="CallToAction-wrap padding-10">
      <h1>{title}</h1>
      <p>{text1}</p>
      <p>{text2}</p>
      <button className="CallToAction-button">{buttonText}</button>
    </div>
  )
}
