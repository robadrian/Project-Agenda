'use strict'
 
const confirm = (initialPass, confirmation) => initialPass === confirmation ? true : false;
const getDomValue = (name) => document.getElementById(name).value;
const characters = (field_one) => field_one <= 8 ? false : true;
 
async function addUser(first) {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(first),
    headers: { "Content-Type": "application/json" }
  })
}
 
async function register() {
  let fullName = getDomValue("fullname");
  let userName = getDomValue("username");
  let password = getDomValue("password");
  let confirm_password = document.getElementById('confirmpassword').value;
 
  if (characters(fullName) && characters(userName) && characters(password) && characters(confirm_password)) {
    if (confirm(password, confirm_password)) {
      const uri = "http://localhost:3000/users";
      fetch(uri).then(res => res.json()).then((data) => {

        if (!(data.filter(users => users.userName === userName).length > 0)) {
          let user = {
            fullName: fullName,
            userName: userName,
            password: password,
          };
          addUser(user);
          window.location.assign(`../html/home.html?id=${data.length + 1}`);
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
  if(characters(loginUserName) && loginPassword) {
    let uri ='http://localhost:3000/users';
    let loggedUserID = await fetch(uri).then(res => res.json()).then(data => {
      let userLogged = data.find(user => user.userName === loginUserName && user.password === loginPassword);
      window.location.replace(`../html/home.html?id=${userLogged.id}`)
    }
    ).catch(err => alert("No user Found"));
    return loggedUserID
  } else {alert("The fields must contain at least 8 characters ")}
}
