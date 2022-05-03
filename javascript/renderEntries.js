'use strict';

const logged = new URLSearchParams(window.location.search).get("id");

async function renderEntries(category) {

    const uri = `http://localhost:3000/${category}`
    const work = document.getElementById("work-area");
    
    fetch(uri).then(res => res.json()).then(data => {
        data.filter(users => users.userId === logged).forEach(prop => {
                const renderCard = `
                    <div class="cardContainer" id="card">
                        <p>${prop.identifier}</p>
                        <p>${prop.details}</p>
                        <button> Delete </button>
                    </div> ` 
                work.insertAdjacentHTML('afterbegin', renderCard);
            })
            })
            
    work.replaceChildren();
}