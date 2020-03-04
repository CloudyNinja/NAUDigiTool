import * as React from "react";


export class Login extends React.Component<{}>
{

    render() {
        return (
            <div id="login-box">
                <form action="login.php" method="post">
                    Username
                    <input type="text" name="user" placeholder="Username"></input><br />
                    Password
                    <input type="password" name="pass" placeholder="Password"></input><br />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }


}

