'use strict'

let contactContainer = `<div id="contactsContainer"></div>`

let contactCard = `
    <div id="contact-card">
        <h3>Contact</h3>
        <h3>07273426437</h3>
        <button> X </button>
    </div> 
`
function renderContacts() {
    let work = document.getElementById("work-area");
    work.insertAdjacentHTML("afterbegin", contactContainer);
    contactContainer.insertAdjacentHTML("afterbegin", work)
}