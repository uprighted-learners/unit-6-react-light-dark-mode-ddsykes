//Creating the Header file
import React from 'react';

const Header = (props) => (
    <div style={props.styleMode}>
<h1>Title</h1>
<img src="path/to/image" alt="example"/>
    </div>
);
//export default Header;

//creating the content file
import React from 'react';
const Content = (props) => (
    <div style={props.styleMode}>
<p>Text Here</p>
<p>Text Here </p>
    </div>
)
export default Content;

//creating the footer file
import React from "react"

const Footer = (prop) =>{
    <div style={props.styleMode}>
        <p>Author's Name</p>
        <p>{new Date().toDateString()}</p>
    </div>
}
//export default Footer;