'use strict'

//let fullName = document.getElementById('fullname').value;
//let userName = document.getElementById('username').value;
//let password = document.getElementById('password').value;

const confirm = (initialPass, confirmation) => initialPass === confirmation ? true : false;
const characters = (field_one) => field_one <= 8 ? false : true;

async function addUser(first) {
    
    await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(first),
        headers: {"Content-Type" : "application/json"}
    })
    window.location.assign('../html/home.html');
}

/*async function userDuplicate () {

    let userName = document.getElementById('username').value;
    const uri = "http://localhost:3000/users";
    const responseDB = await(fetch(uri));
    let users = await responseDB.json();

    if (users !== null) {
        if (users.filter(elem => elem.userName === userName)) {
            return console.log(users);
        } else return true; 
    }
} */

function register () {

    let fullName = document.getElementById('fullname').value;
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirmpassword').value; 
    
    if (characters(fullName) && characters(userName) && characters(password) && characters(confirm_password)) {
        
        if(confirm (password, confirm_password)) {

                let user = {
                    
                    fullName: fullName,
                    userName: userName,
                    password: password,
                    
                };
                
                addUser(user);
    } else {

        alert("Your passwords don't match");

    }
  } else {

    alert("The fields must contain atleast 9 characters");

  }
};
