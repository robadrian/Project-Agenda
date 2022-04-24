'use strict'

const  newPage = (link) => {
    window.location.assign(link);
}

async function logOut() {
    let uri ='http://localhost:3000/users';
    let adi = await fetch(uri).then(res => res.json()).then(data => {
        let userLogged = data.find(user => user.logged === true);
            return userLogged.id
        }
    )
    return adi
}

 const upp =() => logOut().then(x => {
    const midd = async () => {
        await fetch(`http://localhost:3000/users/${x}`, {
            method: "PATCH",
            body: JSON.stringify({
                "logged" : false
            }),
            headers: { "Content-Type": "application/json" }
        } )
    }
    midd();
    newPage("../index.html")
 });
