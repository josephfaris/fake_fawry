let password=document.querySelector ("input")
let true_password=12345
let btn=document.querySelector ("button")
let photo_fawry =document.querySelector ("img")

btn.onclick = function () {
if (password.value == true_password) {
    photo_fawry.style.filter ="blur(0px)";  


}
else {
    window.alert ("Passwrod failed")
}

}

