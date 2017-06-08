var userFullName = localStorage.getItem('loginUser').toUpperCase();
document.getElementById('greet').innerHTML = "Welcome "+userFullName+", You are Successfully Loged in!!";