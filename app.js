var signupForm = document.getElementById('signup')
var card = document.getElementById("myform");
var nameInput = document.getElementById('fullname');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var CpassInput = document.getElementById('confirmpassword');


function startQuiz() {
    if (nameInput.value && emailInput.value && passwordInput.value && CpassInput.value) {
        if (passwordInput.value === CpassInput.value) {
            alert("Account Created")
            signupForm.style.display = "none"
        }
        else {
            alert("Enter both password same")
        }
    }else{
        alert("Fill the required fields")
    }
}
