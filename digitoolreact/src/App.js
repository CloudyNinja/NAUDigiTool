import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="login-box">
      <h1>Login</h1>
      <div class="textbox">
        <form name="login">
        <div class="login">
          <input type="text" placeholder="Username" name="userid"></input>
          <input type="password" placeholder="Password" name="pswrd"></input>
          <input type="button" onclick="checkForm" target="_self" value="Login"></input>
          <input type="button" onclick="register() "Value="Sign Up"></input>

        </div>
        </form>
        <code name="checkForm">
          if( form.userid.value == "" || form.pswrd.value == "" )
            {
              alert( "You must fill in both fields to log in." )
            }
            else 
            {
              /*window.open( 'https://dana.ucc.nau.edu/tpn26/NAUDigiTool/homepage.html' )*/
              window.location.href = "homepage.html"
            }
          }
          
        function register() {
          window.location.href = "register.html"
        }</code>
      </div>
    </div>
    </div>
  );
}

export default App;
