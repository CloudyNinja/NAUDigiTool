import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ModuleNavbar } from "./components/ModuleNavbar";
import { Login } from "./components/Login"
//import { Hello } from "./components/Hello";

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


/*ReactDOM.render(
    <Hello />,
    document.getElementById("hello")
);*/