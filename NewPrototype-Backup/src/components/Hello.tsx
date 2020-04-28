import * as React from "react";

// Use this as the KMap component
export class Hello extends React.Component< {}> 
{
    render() 
    { 
        // Truth Table
        var canvas : any = document.getElementById("myTruthTableCanvas");
        var text = canvas.getContext("2d");
        text.font = "20px Arial";
        text.fillText("Hello World", 30, 75);
        
        return canvas;
    }
}

