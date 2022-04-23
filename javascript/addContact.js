'use strict';

let getDom = (elem) => document.getElementById(elem).value;

let conatctModal = `
    <div id='contactDiv'> 
        <h1 id='title'> NEW CONTACT </h1>
        <input placeholder='Full Name' id='contactName'> 
        <input placeholder='Phone Number' id='contactNumber' type='number'>
        <button id='addContactBtn' onclick="appendContactDB()" > Add </button>
    </div>
`

let contactAdded = `
    <h1>Contact Added</h1>
`

function addContact_btn () {
    const container = document.getElementById('work-area');
    const text = document.getElementById('desc');
    const taskDiv = document.getElementById('taskDiv')
    const apointDiv = document.getElementById('apointDiv');
    text !== null && container.removeChild(text);
    taskDiv !== null && container.removeChild(taskDiv);
    apointDiv !== null && container.removeChild(apointDiv);
    container.insertAdjacentHTML("afterbegin" , conatctModal);
    document.getElementById('addContact').disabled = true;
    document.getElementById('addTask').disabled = false;
    document.getElementById('addApoint').disabled = false;
}

async function appendContactDB() {
    let uri = " http://localhost:3000/contacts?_expand=users";

    const container = document.getElementById('work-area');
    const text = document.getElementById('desc');

    let contactName = getDom("contactName");
    let contactNumber = getDom("contactNumber");

    let contact = {
        name: contactName,
        number: contactNumber,
    }

    await fetch(uri, {
        "method" : "POST",
        "body": JSON.stringify(contact), 
        headers: { "Content-Type": "application/json" }

    } )
} 