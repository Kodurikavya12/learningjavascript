const validateForm = (event) =>{
    event.preventDefault()

    let username = event.target.username.value
    let password =event.target.password.value
    let msg=document.getElementById("message")

    if(username === "" && password === ""){
        msg.innerText = "please enter"
    }
    if(username ===""){
        msg.innerText = "enter username"
        
    }
    if(password === ""){
        msg.innerText = "enter password"
    }
    else{
        msg.innerText = "Login Successful"
    }
}