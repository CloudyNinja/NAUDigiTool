import * as React from "react";


export class Registration extends React.Component<{}>
{
    constructor(props: any) {
        super(props);

        this.createAccount = this.createAccount.bind(this);
    }


    render() {
        return (
            <div id="login-box">
                Create an Account:
                <form  method="post" onSubmit={(e) => this.createAccount(e)}>
                    Username: 
                    <input type="text" id="user" placeholder="Username"></input><br />
                    Password: 
                    <input type="password" id="pass" placeholder="Password"></input><br />
                    Student ID: 
                    <input type="text" id="student_id" placeholder="xxx111"></input><br />
                    <input type="submit" ></input>
                </form>
            </div>
        )
    }

    createAccount(e:React.FormEvent) {
        //dont navigate to page as usual
        e.preventDefault()
        var xmlhttp = new XMLHttpRequest();
        
        //open is the method, file on the serverside to access, and async or not
        xmlhttp.open("POST", "register.php", true);
        //tell it we are sending form data
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // create a listener for when the request is done
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                let response_data = xmlhttp.responseText
                //string instead of bool since converting is unecessary
                if (response_data == "true") {
                    //data is split into true and student_id
                    window.location.href = "index.html";
                    
                }
                else {
                    //if first element is not true it should be 
                    //Failed to query database
                    alert("ERROR: "+response_data);
                }
            }
        }
        let user = (document.getElementById("user") as HTMLInputElement).value;
        let pass = (document.getElementById("pass") as HTMLInputElement).value;
        let id = (document.getElementById("student_id") as HTMLInputElement).value;

        xmlhttp.send( "username="+user+"&password="+pass+"&student_id="+id );
    }

}
