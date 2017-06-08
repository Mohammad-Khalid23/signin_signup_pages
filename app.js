// var person = {
//     userName : "Khalid",
//     Age : 22,
//     num : [030621734,324234]
// }
// var abc = JSON.stringify(person);
// // console.log(person);
// function add(){

//     localStorage.setItem("Data",abc);
// }

// function get(){
//     var items = localStorage.getItem("Data");
// items = JSON.parse(items);
// document.getElementById("demo").innerHTML = "Email :"+items.userName;
// console.log(items);
// }


//Signup Function
function signup() {
    var firstName = document.getElementById('Fname').value;
    var lastName = document.getElementById('Lname').value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var age = document.getElementById('age').value;
    var number = document.getElementById('number').value;

    // Checking input Field empty or not
    if (email != "" && pass != "" && firstName != "" && lastName != "" && age != "" && number != "") {

        if (localStorage.getItem('userCount') == undefined) {
            localStorage.setItem('userCount', 1)
        }

        else {
            var count = parseInt(localStorage.getItem('userCount')) + 1;
            localStorage.setItem('userCount', count);
        }

        var items = "user" + (parseInt(localStorage.getItem("userCount")));

        var user = {

            userFirstName: firstName,
            userLastName: lastName,
            userEmail: email,
            userPassword: pass,
            userAge: age,
            userNumber: number

        }

        localStorage.setItem(items, JSON.stringify(user));


    } else {

        alert("Please Fill Form Complete");


    }

}
/*************Log in Function***************/

function login() {
    var newEmail = document.getElementById("loginEmail").value;
    var newPassword = document.getElementById("loginPassword").value;
    var check = false;
    // Checking input Field empty or not
    if (newEmail != "" && newPassword != "") {

        var count = localStorage.getItem('userCount'); // getting Count user in localStorage


        //Using Loop Getting User One by One from Storage and Check
        for (var i = count; i >= 1; i--) {
            var items = 'user' + i;

            var checkUser = localStorage.getItem(items); // get user from storage
            checkUser = JSON.parse(checkUser);
            var checkEmail = checkUser.userEmail;
            var checkPassword = checkUser.userPassword;

            if (newEmail === checkEmail && newPassword === checkPassword) // checking Email and Password 
            {
                var userFName = checkUser.userFirstName;
                var userLName = checkUser.userLastName;
                var fullName = userFName + " " + userLName;
                localStorage.setItem('loginUser', fullName);
                // alert("Login SuccessFully!!");
                // alert("Welcome " + fullName);

                window.location = "home.html";
                check = true;
                document.getElementById("loginEmail").value = "";
                document.getElementById("loginPassword").value = "";

            }

        }
        if (check === false) {
            alert("Incorrect Email or password");
        }

    } else {
        alert("Please Fill form")
    }



}
