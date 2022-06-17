'use strict'  

// INPUTS - HTML ELEMENTS 

const apointModal = `<div class='inputs-card' id="apoint"> 
<h1 class='title'> NEW APOINTMENT </h1>
<input placeholder='Description' id='apointDescription'> 
<input placeholder='Date' id='date' type='date'>
<button class="add-newEntry-btn" onclick="newEntry(categories[2], 'apointDescription', 'date')"> Add </button>
</div>`

const contactModal = `<div class="inputs-card" id="contact"> 
<h1 class='title'> NEW CONTACT </h1>
<input placeholder='Full Name' id='contactName'> 
<input placeholder='Phone Number' id='contactNumber' type='number'>
<button class='add-newEntry-btn' onclick="newEntry(categories[0], 'contactName', 'contactNumber')"> Add </button>
</div>
`
const taskModal = `<div class="inputs-card" id="task"> 
<h1 class='title'> NEW TASK </h1>
<input placeholder='Title' id='taskTitle'> 
<button class='add-newEntry-btn' onclick="newEntry(categories[1], 'taskTitle')"> Add </button>
</div>
`

// GETTING DOM VALUES AND ELEMENTS 
const getDomValue = (element_value) =>  element_value === undefined ? "" : document.getElementById(element_value).value;
const getDomElement = (element_html) => document.getElementById(element_html);
const characters = (field_one) => field_one <= 3 ? false : true;
// RENDER MODALS FUNCTION

function render_fields (element) {
    
    const work_area = getDomElement("work-area");
    
    work_area !== null && work_area.replaceChildren();    
    work_area.insertAdjacentHTML("beforeend", element);
};

//CATEGORIES 

const categories = ["contacts", "tasks", "apoints"];

// GETTING LOGGED USER ID 

const loggedUser = new URLSearchParams(window.location.search).get("id");

// POST - ADDING ENTRIES TO DATABASE

async function newEntry (category, identifier, details) {

    const work = getDomElement("work-area");
    const entryIdentifier = getDomValue(identifier);
    const entryDetails = getDomValue(details);
    
    if (characters(entryIdentifier)) {
        let entry = {
            identifier: entryIdentifier,
            details:entryDetails,
            userId: loggedUser
        }
        
        entry.details === "" && delete entry.details;
        
        let uri = ` http://localhost:3000/${category}`;
        
        await fetch(uri, {
            method: "POST",
            body: JSON.stringify(entry),
            headers: { "Content-Type": "application/json" }
        })
    work.replaceChildren();        
    } else alert("The fileds must contain atleast 3 characters")
} 
