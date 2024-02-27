function checkPasswordMatch(params) {
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("passwordConfirm").value;
    let passwordMatchMessage = document.getElementById("passwordMatch");
    let passwordInput1 = document.getElementById("password");
    let passwordInput2 = document.getElementById("passwordConfirm");

    if (password1 !== password2) {
        passwordMatchMessage.innerHTML = "Passwords do not match!";
        passwordMatchMessage.style.color = "red";
        passwordInput1.classList.add('password-error');
        passwordInput2.classList.add('password-error');
        passwordInput1.classList.remove('password-success');
        passwordInput2.classList.remove('password-success');
    } else {
        passwordMatchMessage.innerHTML = "Passwords match";
        passwordMatchMessage.style.color = "green";
        passwordInput1.classList.remove('password-error');
        passwordInput2.classList.remove('password-error');
        passwordInput1.classList.add('password-success');
        passwordInput2.classList.add('password-success');
    }
}
