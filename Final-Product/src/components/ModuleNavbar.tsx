import * as React from "react";

export class ModuleNavbar extends React.Component<{}>
{
    constructor(props: any) {
        super(props);

        this.logout = this.logout.bind(this);
        this.createSave = this.createSave.bind(this);
    }


    render() {
        return <ul id="navigationBar">
            <li onClick={() => this.createSave()}><a href="../../homepage.html">Home</a></li>
            <li onClick={() => this.createSave()}><a href="../../modules.html">Modules</a></li>
            <li onClick={() => this.createSave()}><a href="../../practiceMode.html">Practice Mode</a></li>
            <li onClick={() => this.logout()}><a href="../../index.html">Log Out</a></li>
        </ul>;
    }

    logout() {
        this.createSave();
        sessionStorage.removeItem("student_id");
        sessionStorage.removeItem("saveData");
    }

    createSave() {
        let saveData = sessionStorage.getItem("saveData");
        if( saveData != null) {
            saveData = JSON.parse(saveData);

            var xmlhttp = new XMLHttpRequest();
            //open is the method, file on the serverside to access, and async or not
            xmlhttp.open("POST", "../../createSave.php", true);

            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
            //send is the variables passed through POST that the php file can use
            xmlhttp.send("id="+saveData[0]+"&module="+saveData[1]+"&question="+saveData[2]+
                "&stars="+saveData[3]);
        }
    }
}