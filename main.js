const info={
email:'hooyo@gmail.com',
pin:'1234',

}


const main=document.querySelector('.hidden')
const login=document.querySelector('.login-part')
const btn=document.querySelector('.btn')
// tijabo
const inputemail=document.getElementById('login-email')
const inputpass=document.getElementById('login-password')

// event handler 
btn.addEventListener('click',function(e){
e.preventDefault()
    if(inputemail.value===info.email && inputpass.value===info.pin){
        
        main.classList.remove('hidden')
        login.style.display='none'
    }
        else 
alert('worng passwrod or email')




})