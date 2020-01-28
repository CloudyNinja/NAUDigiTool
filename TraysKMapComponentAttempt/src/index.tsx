import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Hello } from "./components/Hello";
import { Footer } from "./components/Footer";

ReactDOM.render(
    <Navbar />,
    document.getElementById("navbar")
);

ReactDOM.render(
    <Hello />,
    document.getElementById("hello")
);

ReactDOM.render(
    <Footer />,
    document.getElementById("footer")
);