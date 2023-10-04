var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;

var userName = "kai";
var passwd = "123";

function runMe() {
   if (u_name.value === userName && u_pass.value === passwd) {
      alert("Login Sucess");
      console.log("login Sucess");
   }
   else {
      console.log("login Error");
   }
}

//User console on browser to debugg 