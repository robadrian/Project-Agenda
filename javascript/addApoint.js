'use strict'

const apointModal = `<div id='apointDiv'> 
<h1 id='title'> NEW APOINTMENT </h1>
<input placeholder='Description' id='apointDescription'> 
<input placeholder='Date' id='date' type='date'>
<button id='addApointBtn'> Add </button>
</div>`

function addApoint () {
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