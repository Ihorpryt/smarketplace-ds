import React from "react";

const AlertSmall = ({color}) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9C4.5 8.17157 5.17157 7.5 6 7.5C6.82843 7.5 7.5 8.17157 7.5 9C7.5 9.82843 6.82843 10.5 6 10.5C5.17157 10.5 4.5 9.82843 4.5 9Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83461 1.59133C4.27695 2.27185 4.19043 3.33809 4.62789 4.13885L5.41402 6.2C5.69491 6.71417 6.31405 6.71417 6.59494 6.2L7.38107 4.13885C7.81853 3.33809 7.73201 2.27185 7.17436 1.59133C6.52825 0.802889 5.48071 0.802889 4.83461 1.59133Z" fill={color}/>
        </svg>
    );

};

export default AlertSmall;