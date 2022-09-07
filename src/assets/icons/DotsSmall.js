import React from "react";

const DotsSmall = ({color}) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3.55228 7 4 6.55228 4 6C4 5.44772 3.55228 5 3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z" fill={color}/>
        </svg>
    );

};

export default DotsSmall;