!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),o=n(2),l=n(3),a=n(4),i=n(5),s=n(6);null!=document.getElementById("navbar")&&o.render(r.createElement(l.Navbar,null),document.getElementById("navbar")),null!=document.getElementById("footer")&&o.render(r.createElement(a.Footer,null),document.getElementById("footer")),null!=document.getElementById("moduleNavbar")&&o.render(r.createElement(i.ModuleNavbar,null),document.getElementById("moduleNavbar")),null!=document.getElementById("login")&&o.render(r.createElement(s.Login,null),document.getElementById("login"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o extends r.Component{constructor(e){super(e),this.logout=this.logout.bind(this)}render(){return r.createElement("ul",{id:"navigationBar"},r.createElement("li",null,r.createElement("a",{href:"index.html"},"Home")),r.createElement("li",null,r.createElement("a",{href:"modules.html"},"Modules")),r.createElement("li",null,r.createElement("a",{href:"practiceMode.html"},"Practice Mode")),r.createElement("li",{onClick:()=>this.logout()},r.createElement("a",{href:"login.html"},"Log Out")))}logout(){sessionStorage.removeItem("student_id")}}t.Navbar=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o extends r.Component{render(){return r.createElement("div",{id:"footer"}," © 2019 Northern Arizona University, DigiTool Inc.")}}t.Footer=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o extends r.Component{constructor(e){super(e),this.logout=this.logout.bind(this),this.createSave=this.createSave.bind(this)}render(){return r.createElement("ul",{id:"navigationBar"},r.createElement("li",{onClick:()=>this.createSave()},r.createElement("a",{href:"../../index.html"},"Home")),r.createElement("li",{onClick:()=>this.createSave()},r.createElement("a",{href:"../../modules.html"},"Modules")),r.createElement("li",{onClick:()=>this.createSave()},r.createElement("a",{href:"../../practiceMode.html"},"Practice Mode")),r.createElement("li",{onClick:()=>this.logout()},r.createElement("a",{href:"../../login.html"},"Log Out")))}logout(){this.createSave(),sessionStorage.removeItem("student_id"),sessionStorage.removeItem("saveData")}createSave(){let e=sessionStorage.getItem("saveData");if(null!=e){e=JSON.parse(e);var t=new XMLHttpRequest;t.open("POST","../../createSave.php",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send("id="+e[0]+"&module="+e[1]+"&question="+e[2]+"&stars="+e[3])}}}t.ModuleNavbar=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class o extends r.Component{constructor(e){super(e),this.attempt_login=this.attempt_login.bind(this)}render(){return r.createElement("div",{id:"login-box"},r.createElement("form",{method:"post",onSubmit:e=>this.attempt_login(e)},"Username",r.createElement("input",{type:"text",id:"user",placeholder:"Username"}),r.createElement("br",null),"Password",r.createElement("input",{type:"password",id:"pass",placeholder:"Password"}),r.createElement("br",null),r.createElement("input",{type:"submit"})))}attempt_login(e){e.preventDefault();var t=new XMLHttpRequest;t.open("POST","login.php",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){let e=t.responseText.split(",");"true"==e[0]?(sessionStorage.setItem("student_id",e[1]),alert(sessionStorage.getItem("student_id")),window.location.href="index.html"):alert("ERROR: "+e)}};let n=document.getElementById("user").value,r=document.getElementById("pass").value;t.send("username="+n+"&password="+r)}}t.Login=o}]);
//# sourceMappingURL=main.js.map