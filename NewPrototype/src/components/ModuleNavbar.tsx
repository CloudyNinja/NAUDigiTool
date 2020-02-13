import * as React from "react";

export class ModuleNavbar extends React.Component< {}> 
{
    render() 
    {
        return <ul id="moduleNavbar">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../modules.html">Modules</a></li>
            <li><a href="../../practiceMode.html">Practice Mode</a></li>
            <li><a href="../../index.html">Log Out</a></li>
        </ul>;
    }
}