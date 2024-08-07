function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') 
    {
        alert('Please enter the Username and Password!!')
        
    } else {
        alert('Login successfully!!');
        window.location.assign('des.html');
        return false;
    }
}