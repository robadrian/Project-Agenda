'use strict'

const apointModal = `<div id='apointDiv'> 
<h1 id='title'> NEW APOINTMENT </h1>
<input placeholder='Description' id='apointDescription'> 
<input placeholder='Date' id='date' type='date'>
<button id='addApointBtn' onclick="apointUpp()"> Add </button>
</div>`



function addApoint_btn () {
    const container = document.getElementById('work-area');
    const text = document.getElementById('desc');
    const taskDiv = document.getElementById('taskDiv')
    const contactDiv = document.getElementById('contactDiv');
    text !== null && container.removeChild(text);
    taskDiv !== null && container.removeChild(taskDiv);
    contactDiv !== null && container.removeChild(contactDiv);
    container.insertAdjacentHTML("afterbegin" , apointModal);
    document.getElementById('addContact').disabled = false;
    document.getElementById('addTask').disabled = false;
    document.getElementById('addApoint').disabled = true;
}

async function apend() {
    let uri ='http://localhost:3000/users';
    let adi = await fetch(uri).then(res => res.json()).then(data => {
        let userLogged = data.find(user => user.logged === true);
            return userLogged.id
        }
    )
    return adi
}

const apointUpp = () => apend().then(x => {

    async function appendApointDB() {
        let uri = " http://localhost:3000/apoints";
            
        let apointTitle = getDom("apointDescription");
        let apointDate = getDom("date");
    
        let apointment = {
            title: apointTitle,
            date: apointDate,
            userId: x
        }
    
        await fetch(uri, {
            "method" : "POST",
            "body": JSON.stringify(apointment), 
            headers: { "Content-Type": "application/json" }
    
        } )
    } 
    alert("Apointment Added");
    appendApointDB()
})