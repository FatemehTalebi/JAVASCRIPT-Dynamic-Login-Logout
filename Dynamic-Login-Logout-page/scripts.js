function login() {
    var registerElement = document.getElementById("register");
    registerElement.classList.add("d-none");
    var loginElement = document.getElementById("login");
    loginElement.classList.remove("d-none");
   
}
  



function register() {
    var loginElement = document.getElementById("login");
    loginElement.classList.add("d-none");
    var registerElement = document.getElementById("register");
    registerElement.classList.remove("d-none");


}
