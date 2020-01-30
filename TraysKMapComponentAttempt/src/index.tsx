import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
//import { Hello } from "./components/Hello";

ReactDOM.render(
    <Navbar />,
    document.getElementById("navbar")
);

ReactDOM.render(
    <Footer />,
    document.getElementById("footer")
);

/*ReactDOM.render(
    <Hello />,
    document.getElementById("hello")
);*/