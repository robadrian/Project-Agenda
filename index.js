'use strict'
 
//let fullName = document.getElementById('fullname').value;
//let userName = document.getElementById('username').value;
//let password = document.getElementById('password').value;
 
const confirm = (initialPass, confirmation) => initialPass === confirmation ? true : false;
const getDomValue = (name) => document.getElementById(name).value;
const characters = (field_one) => field_one <= 8 ? false : true;
 
async function addUser(first) {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(first),
    headers: { "Content-Type": "application/json" }
  })
 
  window.location.assign('../html/home.html');
}
 
async function register() {
  let fullName = getDomValue("fullname");
  let userName = getDomValue("username");
  let password = getDomValue("password");
  let confirm_password = document.getElementById('confirmpassword').value;
 
  if (characters(fullName) && characters(userName) && characters(password) && characters(confirm_password)) {
    if (confirm(password, confirm_password)) {
      const uri = "http://localhost:3000/users?_embed=contacts";
     
      fetch(uri).then(res => res.json()).then((data) => {
        if (!(data.filter(users => users.userName === userName).length > 0)) {
          let user = {
            fullName: fullName,
            userName: userName,
            password: password,
            logged: true
 
          };
          console.log(uri)
          addUser(user);
        }
        else { alert('This user already exists'); }
      })
    } else {
      alert("Your passwords don't match");
    }
  } else {
    alert("The fields must contain atleast 9 characters");
  }
};

async function login() {

  let loginUserName = getDomValue("username_login");
  let loginPassword = getDomValue("password_login");

  if(characters(loginUserName) && characters(loginPassword)) {

    const uri = "http://localhost:3000/users";

    const data = fetch(uri).then(res => res.json()).then((data) => {
      if(data.filter(users => users.userName === loginUserName && users.password === loginPassword).length > 0) {
        data.logged = true;
        window.location.assign('../html/home.html');
      } else alert("There is no user with this name");
    })
    console.log(data);
  } else {
    alert("The fields must contain at least 9 characters")
  }
}
