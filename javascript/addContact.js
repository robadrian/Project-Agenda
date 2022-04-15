'use strict';

let conatctModal = `
    <div id='contactDiv'> 
        <h1 id='title'> NEW CONTACT </h1>
        <input placeholder='Full Name' id='contactName'> 
        <input placeholder='Phone Number' id='contactNumber' type='number'>
        <button id='addContactBtn' onclick="addContactCard()" > Add </button>
    </div>
`

function addContact () {
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

