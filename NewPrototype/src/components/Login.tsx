import * as React from "react";
//import * as MySql from 'mysql';


export class Login extends React.Component<{}>
{
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    Username
                <input type="text" placeholder="Username"></input><br />
                    Password
                <input type="text" placeholder="Password"></input><br />
                <input type="submit"></input>
                </form>
            </div>
        )
    }

      
    login() {
        /*  
        var con = MySql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "nodejs"
        });

        let sql = "SELECT * FROM users";

        con.connect(function (err: any
        ) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err: any, result: any, fields: any) {
                if (err) throw err;
                console.log(result);
            });
        });
        */
    }
    
}

