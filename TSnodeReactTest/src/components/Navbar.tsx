import * as React from "react";

export class Navbar extends React.Component< {}> 
{
    render() 
    {
        return <ul id="navigationBar">
            <li><a href="homepage.html">Home</a></li>
            <li><a href="modules.html">Modules</a></li>
            <li><a href="freeMode.html">Free Mode</a></li>
            <li><a href="index.html">Log Out</a></li>
        </ul>;
    }
}