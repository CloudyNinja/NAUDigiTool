import * as React from "react";

export class ModuleNavbar extends React.Component<{}>
{
    constructor(props: any) {
        super(props);

        this.logout = this.logout.bind(this);
    }


    render() {
        return <ul id="navigationBar">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../modules.html">Modules</a></li>
            <li><a href="../../practiceMode.html">Practice Mode</a></li>
            <li onClick={() => this.logout()}><a href="../../login.html">Log Out</a></li>
        </ul>;
    }

    logout() {
        sessionStorage.removeItem("student_id");
    }

}