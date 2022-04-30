'use strict'  

// HTML CARDS

const apointModal = `<div class='inputs-card' id="apoint"> 
<h1 class='title'> NEW APOINTMENT </h1>
<input placeholder='Description' id='apointDescription'> 
<input placeholder='Date' id='date' type='date'>
<button class="add-newEntry-btn"> Add </button>
</div>`

const contactModal = `<div class="inputs-card" id="contact"> 
        <h1 class='title'> NEW CONTACT </h1>
        <input placeholder='Full Name' id='contactName'> 
        <input placeholder='Phone Number' id='contactNumber' type='number'>
        <button class='add-newEntry-btn'> Add </button>
    </div>
`
const taskModal = `<div class="inputs-card" id="task"> 
        <h1 class='title'> NEW TASK </h1>
        <input placeholder='Title' id='taskTitle'> 
        <button class='add-newEntry-btn'> Add </button>
    </div>
`
// GETTING DOM VALUES AND ELEMENTS 

const getDomValue = (element_value) =>  document.getElementById(element_value).value;
const getDomElement = (element_html) => document.getElementById(element_html);

// RENDER MODALS FUNCTION

function render_fields (element, element_id1, element_id2, button1, button2, button3) {

    const work_area = getDomElement("work-area");
    
    const el1 = getDomElement(element_id1);
    const el2 = getDomElement(element_id2);

    el1 !== null && work_area.removeChild(el1);
    el2 !== null && work_area.removeChild(el2);
    
    document.getElementById(button1).disabled = true;
    document.getElementById(button2).disabled = false;
    document.getElementById(button3).disabled = false;

    work_area.insertAdjacentHTML("beforeend", element);
}