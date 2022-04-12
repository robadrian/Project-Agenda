'use strict';

let conatctModal = `
    <div id='contactDiv'> 
        <h1 id='title'> NEW CONTACT </h1>
        <input placeholder='Full Name' id='contactInputs'> 
        <input placeholder='Phone Number' id='contactInputs' type='number'>
        <button id='addBtn'> Add </button>
    </div>
`

function addContact () {
    const container = document.getElementById('work-area');
    const text = document.getElementById('desc');
    container.insertAdjacentHTML("afterbegin" , conatctModal);
    container.removeChild(text);
    document.getElementById('addContact').disabled = true;
}