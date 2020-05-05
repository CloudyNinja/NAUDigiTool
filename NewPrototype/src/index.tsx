import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ModuleNavbar } from "./components/ModuleNavbar";
import { Login } from "./components/Login"
import { Registration } from "./components/Registration";
//import { Hello } from "./components/Hello";

//Because webpack puts all of our react components in main.js
//this index file will try to render every component on every page
//react doesnt like this and breaks the page -> need to check if that
//component actually exists on the page before trying to render it. 

if (document.getElementById("navbar") != null) {
    ReactDOM.render(
        <Navbar />,
        document.getElementById("navbar")
    );
}

if (document.getElementById("footer") != null) {
    ReactDOM.render(
        <Footer />,
        document.getElementById("footer")
    );
}

if (document.getElementById("moduleNavbar") != null) {
    ReactDOM.render(
        <ModuleNavbar />,
        document.getElementById("moduleNavbar")
    );
}

if (document.getElementById("login") != null) {
    ReactDOM.render(
        <Login />,
        document.getElementById("login")
    );
}

if (document.getElementById("registration") != null) {
    ReactDOM.render(
        <Registration />,
        document.getElementById("registration")
    );
}


/*ReactDOM.render(
    <Hello />,
    document.getElementById("hello")
);*/