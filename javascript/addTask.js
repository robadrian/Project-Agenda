'use strict';

let taskModal = `
    <div id='taskDiv'> 
        <h1 id='title'> NEW TASK </h1>
        <input placeholder='Title' id='taskTitle'> 
        <button id='addTaskBtn'> Add </button>
    </div>
`

function addTask () {
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
