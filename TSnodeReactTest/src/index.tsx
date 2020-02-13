import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";



if(document.getElementById("login") != null)
{
    ReactDOM.render(
        <Login />,
        document.getElementById("login")
    );
}


if(document.getElementById("footer") != null)
{
    ReactDOM.render(
        <Footer />,
        document.getElementById("footer")
    );
}


if(document.getElementById("navbar") != null)
{
    ReactDOM.render(
        <Navbar />,
        document.getElementById("navbar")
    );
}




