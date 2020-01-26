import * as React from "react";
import * as ReactDOM from "react-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

ReactDOM.render(
    <Navbar />,
    document.getElementById("navbar")
);

ReactDOM.render(
    <Footer />,
    document.getElementById("footer")
);