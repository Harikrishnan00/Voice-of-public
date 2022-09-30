// Initializung variables
let email=document.querySelector('[data-email]')
let password=document.querySelector('[data-password]')
let signInBtn=document.querySelector('[data-signin-btn]')
let userId
let fName=document.querySelector('[data-name]')
let age=document.querySelector('[data-age]')
let area=document.querySelector('[data-area]')
let phoneNumber=document.querySelector('[data-phone-number]')
let aadharNumber=document.querySelector('[data-aadhar-number]')

// Initializing firebase authentication
const auth = firebase.auth()

// Initializing firebase database
const db = firebase.database()

// function for creating new user in firebase authenticatin
function signInWithEmailAndPass(){

    const emailValue=email.value
    const passwordValue=password.value

    auth.createUserWithEmailAndPassword(emailValue, passwordValue).then((response)=>{
        userId = response.user.uid
        if(userId){
            localStorage.setItem('publicId',userId)
            addingDataToDB(userId)
            alert("Registered successfull")
            redirectToMainPage("../../user-page/public/public.html")
        }
    })
}

// function for redirecting to main page when creation of user complete
function redirectToMainPage(path){
    window.location.href=path
}

//calling functiion when click on sign up button
signInBtn.addEventListener('click',signInWithEmailAndPass)

// function for adding user details to db
function addingDataToDB(id){
    db.ref('/users/public/'+id).set({
        name:fName.value,
        email:email.value,
        age:age.value,
        area:area.value,
        phoneNumber:phoneNumber.value,
        aadharNumber:aadharNumber.value,
        id:id
    })
}


