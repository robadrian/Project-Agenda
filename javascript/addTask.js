'use strict';

let taskModal = `
    <div id='taskDiv'> 
        <h1 id='title'> NEW TASK </h1>
        <input placeholder='Title' id='taskTitle'> 
        <button id='addTaskBtn' onclick="taskUpp()"> Add </button>
    </div>
`

function addTask_btn () {
    const container = document.getElementById('work-area');
    const text = document.getElementById('desc');
    const contactDiv = document.getElementById('contactDiv')
    const apointDiv = document.getElementById('apointDiv');
    container.insertAdjacentHTML("afterbegin" , taskModal);
    text !== null && container.removeChild(text);
    contactDiv !== null && container.removeChild(contactDiv);
    apointDiv !== null && container.removeChild(apointDiv);
    document.getElementById('addTask').disabled = true;
    document.getElementById('addContact').disabled = false;
    document.getElementById('addApoint').disabled = false;
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

const taskUpp = () => apend().then(x => {

    async function appendTaskDB() {
        let uri = " http://localhost:3000/tasks";
            
        let taskTitle = getDom("taskTitle");
    
        let task = {
            title: taskTitle,
            userId: x
        }
    
        await fetch(uri, {
            "method" : "POST",
            "body": JSON.stringify(task), 
            headers: { "Content-Type": "application/json" }
    
        } )
    } 
    alert("Task Added");
    appendTaskDB()
})