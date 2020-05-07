import * as React from "react";


export class Login extends React.Component<{}>
{
    constructor(props: any) {
        super(props);

        this.attempt_login = this.attempt_login.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }


    render() {
        return (
            <div id="login-box">
                <form  method="post" onSubmit={(e) => this.attempt_login(e)}>
                    Username
                    <input type="text" id="user" placeholder="Username"></input><br />
                    Password
                    <input type="password" id="pass" placeholder="Password"></input><br />
                    <input type="submit" ></input>
                    <button onClick={() => this.createAccount()}>Create an account</button>
                </form>
            </div>
        )
    }

    attempt_login(e:React.FormEvent) {
        //dont navigate to page as usual
        e.preventDefault()
        var xmlhttp = new XMLHttpRequest();
        
        //open is the method, file on the serverside to access, and async or not
        xmlhttp.open("POST", "login.php", true);
        //tell it we are sending form data
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // create a listener for when the request is done
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                let response_data = xmlhttp.responseText.split(',');
                //string instead of bool since converting is unecessary
                if (response_data[0] == "true") {
                    //data is split into true and student_id
                    sessionStorage.setItem("student_id", response_data[1]);
                    window.location.href = "homepage.html";
                    
                }
                else {
                    //if first element is not true it should be 
                    //either User does not exist/incorrect pass
                    //or Failed to query database
                    alert("ERROR: "+response_data);
                }
            }
        }
        let user = (document.getElementById("user") as HTMLInputElement).value;
        let pass = (document.getElementById("pass") as HTMLInputElement).value;

        xmlhttp.send( "username="+user+"&password="+pass);
    }

    createAccount() {
        window.location.href = "register.html";
    }
}
