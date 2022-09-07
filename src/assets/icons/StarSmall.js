import React from "react";

const StarSmall = ({color}) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1.00002L6.41791 2.67167C6.7762 4.10481 7.89521 5.22382 9.32836 5.5821L11 6L9.32833 6.41793C7.8952 6.77621 6.7762 7.89521 6.41792 9.32835L6 11L5.58208 9.32835C5.2238 7.89521 4.10481 6.77622 2.67167 6.41793L1 6L2.67164 5.5821C4.10479 5.22382 5.2238 4.10481 5.58209 2.67166L6 1.00002Z" fill={color}/>
        </svg>
    );

};

export default StarSmall;