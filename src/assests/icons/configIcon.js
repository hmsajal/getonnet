import React from "react";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#5F2EEA"
                strokeLinecap="round"
                strokeWidth="2"
                d="M3 17h10M10 7h10"
            ></path>
            <circle cx="17" cy="17" r="3" stroke="#5F2EEA" strokeWidth="2"></circle>
            <circle cx="6" cy="7" r="3" stroke="#5F2EEA" strokeWidth="2"></circle>
        </svg>
    );
}

export default Icon;