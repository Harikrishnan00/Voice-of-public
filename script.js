
let publicBtn=document.querySelector('[data-public]')
let officerBtn=document.querySelector('[data-officer]')

// Setting flag value in localstorage
const addingToLocalStorage = (flag) =>{
    localStorage.setItem('userFlag',flag)
    window.location.href = "./login/login.html";
}

//passing true value into addingToLocalStorage when click public button
publicBtn.addEventListener('click',()=>{
    addingToLocalStorage(true)
})

//passing false value into addingToLocalStorage when click public button
officerBtn.addEventListener('click',()=>{
    addingToLocalStorage(false)
})