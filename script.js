document.querySelector(".btn").addEventListener("click", (e)=>{
    console.log("Clicked");
    e.preventDefault()
    console.log(username.value, password.value);

    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
})