const updateButton = document.querySelector('#update')
const deleteButton = document.querySelector('#delete-button')
const burger = document.querySelector('.fa-bars')

burger.addEventListener('click', openMenu)

let menu = false
function openMenu() {
    if(menu === false) {
        document.querySelector('#journal-entries-mobile').style.display = 'flex'
        return menu = true
    } else if(menu === true) {
        document.querySelector('#journal-entries-mobile').style.display = 'none'
        return menu = false
    }
}

updateButton.addEventListener('click', editEntry)
deleteButton.addEventListener('click', deleteEntry)

async function deleteEntry(){
    const entryId = this.dataset.id
    try{
        const response = await fetch(`/entries/${entryId}/deleteEntry`, {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'entryIdFromJSFile': Object(entryId)
            })
        })
        const data = await response.json()
        console.log(data)
        location.replace('/entries')
    }catch(err){
        console.log(err)
    }
}
async function editEntry(){
    const entryId = this.dataset.id
    const first = document.querySelector('#first').value
    const second = document.querySelector('#second').value
    const third = document.querySelector('#third').value
    try{
        const response = await fetch(`/entries/${entryId}/editEntry`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'entryIdFromJSFile': Object(entryId),
                'first': first,
                'second': second,
                'third': third
            })
        })
        const data = await response.json()
        console.log(data)
        location.replace('/entries')
    }catch(err){
        console.log(err)
    }
}