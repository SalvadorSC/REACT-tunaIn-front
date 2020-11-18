import React from 'react';
import './Options.css';

export const Options = ({ title, content, button, account, inversButton, extra, extras }) => {
    return (
        <div className="Options-wrap">
            <p>{account}</p>
            <h3>{title}</h3>
            <ul>
                {content.map(cont => <li>{cont}</li>)}
            </ul>
            <ul>
                {extra.map(cont => <li className={extras}>{cont}</li>)}
            </ul>
            <button className={inversButton}>{button}</button>
        </div>
    )
}
