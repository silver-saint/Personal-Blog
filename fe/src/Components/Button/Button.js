import React from "react";




const Button = ({ children, onClick, value, style }) => {
    const myButtonStyle = {
        padding: "10px 20px",
        backgroundColor: "black",
    };
 
    return (
        <button onClick={onClick} style={{...myButtonStyle, ...style}} value={value}>
        {children} 
        </button>
    );
    };
    export default Button;

