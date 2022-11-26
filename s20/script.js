console.log("yo!");

let login_attempts = 3;
// sets the number of login attempts

function validate_form(){
    let emailAdd = document.getElementById("emailAdd").value;

    let pass = document.getElementById("pass").value;
    // document.getElementById - returns an element object representing the element whose id matches the specified string

    // elementId - required to be unique if specified to get access to elements quickly

    // .value sets or returns the value of an attribute

    if (emailAdd == "student@mail.com" && pass == "discovery"){
        alert("Successfully Logged In");
        document.getElementById("emailAdd").value="";
        document.getElementById("pass").value="";
    }else{
        if (login_attempts == 0){
            alert("No Login Attempts Available");
        }else{
            login_attempts = login_attempts - 1;
            alert("You only have " + login_attempts + " login attempts available");

            if(login_attempts == 0){
                document.getElementById("emailAdd").disabled = true;
                document.getElementById("pass").disabled = true;
                document.getElementById("form1").disabled = true;

                // disables the form
            }
        }
    }

    return false
    // during form submission, if a particular entry is unfilled, return false is used to prevent submission
}