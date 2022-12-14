let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value;

    let lastName = document.getElementById("lastName").value;

    let emailAddress = document.getElementById("emailAddress").value;

    let mobileNo = document.getElementById("mobileNo").value;

    let password = document.getElementById("password").value;

})