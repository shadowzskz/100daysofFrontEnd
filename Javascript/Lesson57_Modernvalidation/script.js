/**
 * Traditional Form Validation
 * var u_name = document.myForm.u_name;
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
 * 
 */

 //Modern Validations
 var u_name = document.myForm.u_name;
 var message = document.getElementById('message');

 function runMe() {
    if (u_name.value.length < 3) {
       message.innerHTML = "Needs more Character";
       message.style.color = "red";
       u_name.style.backgroundColor = "red";
       u_name.style.color = "white";
    }
    else if (u_name.value.length === 5) {
      message.innerHTML = "Nice";
      message.style.color = "green";
      u_name.style.backgroundColor = "green";
      u_name.style.color = "white";
   }
   else if (u_name.value.length > 8) {
      message.innerHTML = "Max limit";
      message.style.color = "orange";
      u_name.style.backgroundColor = "orange";
      u_name.style.color = "white";
   }
 }

