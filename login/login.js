// Initializing variables 
let email=document.querySelector('[data-email]')
let password=document.querySelector('[data-password]')
let logInBtn=document.querySelector('[data-login-btn]')
let signUpBtn=document.querySelector('[data-signup-link]')
let userId

// Initializing firebase authentication
const auth = firebase.auth()

// Initializing firebase database
const db = firebase.database()

// This function is for taking email and passsword from  the user and
// authenticate that with firebase authenication
function loginWithEmailAndPass(){

    const emailValue=email.value
    const passwordValue=password.value

    auth.signInWithEmailAndPassword(emailValue, passwordValue).then(response=>{
        userId = response.user.uid
        let flag=localStorage.getItem('userFlag')
        if(userId){
            alert("login successfully")
            
            if(flag==="true"){
                redirectToMainPage("../user-page/public/public.html")
                localStorage.setItem("publicId",userId)
            }else{
                redirectToMainPage("../user-page/officer/officer.html")
                localStorage.setItem("officerId",userId)
            }
        }
    }).catch(error=>{
        alert(error.message)
    })
}

// function for redirecting to the main page when 
// authentication complete
function redirectToMainPage(path){
    window.location.href=path
}

// calling loginWithEmailAndPass function when clicking login button
logInBtn.addEventListener('click',loginWithEmailAndPass)


// Redirecting to the signup page 
signUpBtn.addEventListener('click',()=>{

    let flag=localStorage.getItem('userFlag')

    if(flag==="true"){
        signUpBtn.href="../Sign-up/Public/public-sign-up.html"
    }
    else{
        signUpBtn.href="../Sign-up/Officer/officer-sign-up.html"
    }

})