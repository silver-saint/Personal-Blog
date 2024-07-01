import React from 'react'
import Button from '../Button/Button';
const Nav = () => {
    const menuStyle = {
        ul: {
            listStyleType: "none",
            padding: 0,
            backgroundColor: "black",
        },
        li: {
            display: "inline",
            padding: "15px",
        },
        
    };
    const handleClick = (e) => {
        console.log("Button clicked", e.target.value);
    };
    return (
        <ul style={menuStyle.ul}>
            <li style={menuStyle.li}>
                <Button onClick={handleClick} value="Home" style={{color: "white", backgroundColor: "transparent", border: "none"}}>
                    Home
                </Button>
            </li>
            <li style={menuStyle.li}>
                <Button onClick={handleClick} value="About" style={{color: "white", backgroundColor: "transparent", border: "none"}}>
                    About
                </Button>
            </li>
            <li style={menuStyle.li}>
                <Button onClick={handleClick} value="Contact" style={{color: "white", backgroundColor: "transparent", border: "none"}}>
                    Contact
                </Button>
            </li>
        </ul>
    );
}
export default Nav;