'use strict';

const logged = new URLSearchParams(window.location.search).get("id");
const entryCategory = new URLSearchParams(window.location.search).get("category") || "";

async function renderEntries(category) {
    
    const uri = `http://localhost:3000/${category}`
    const work = document.getElementById("work-area");
    
    fetch(uri).then(res => res.json()).then(data => {
        data.filter(users => users.userId === logged).forEach(prop => {
            const renderCard = `
            <div class="cardContainer" id="card${prop.id}">
            <p>${prop.identifier}</p>
            <p>${prop.details !== undefined ? prop.details : ""}</p>
            <button onclick="deleteEntry('${category}', ${prop.id})"> Delete </button>
            </div> ` 
            work.insertAdjacentHTML('afterbegin', renderCard);
        })
    })
   
    work.replaceChildren();
}



async function deleteEntry (category, entryId) {

    let uri = `http://localhost:3000/${category}/${entryId}`
    let card = document.getElementById(`card${entryId}`);
    card.remove();
    await fetch(uri, {
        method: "DELETE"
    })
    alert("Entry Deleted")
}
