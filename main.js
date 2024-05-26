const info={
<<<<<<< HEAD
    email:'hooyo@gmail.com',
    pin:'1234',
    
=======
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
>>>>>>> origin/main
    }
    const info2={
      email:'aabe@gmail.com',
      pin:'1234',
    
    }
    const accounts=[info,info2]
    
    const main=document.querySelector('.hidden')
    const login=document.querySelector('.login-part')
    const btn=document.querySelector('.btn')
    // tijabo
    const inputemail=document.getElementById('login-email')
    const inputpass=document.getElementById('login-password')
    
    // event handler 
    btn.addEventListener('click',function(e){
    e.preventDefault()
          
      const account = accounts.find(acc => acc.email === inputemail.value && acc.pin === inputpass.value)
    
      if (account) {
        alert('hello')
        // Perform login action, e.g., show main content, hide login part, etc.
        main.classList.remove('hidden')
        login.classList.add('hidden')
      } else {
        alert('wrong user or pass')
      }
            
    
    
    
    
    })