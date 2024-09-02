function signup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const password = document.getElementById('signupPassword').value;

    if (name && password) {
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        alert('Signup successful! Please login.');
        document.getElementById('signup').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }
}

function login(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;

    const storedName = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('password');

    if (name === storedName && password === storedPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
        document.getElementById('userName').textContent = name;
    } else {
        alert('Invalid name or password');
    }
}

function requestVerification(event) {
    event.preventDefault();

    // Collect bank information (no real backend processing in this example)
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const routingNumber = document.getElementById('routingNumber').value;

    if (bankName && accountNumber && routingNumber) {
        alert('A verification code will be sent to the moderator.');
        document.getElementById('withdrawalForm').style.display = 'none';
        document.getElementById('verification').style.display = 'block';
    } else {
        alert('Please fill out all bank details.');
    }
}

function verifyCode() {
    const verificationCode = document.getElementById('verificationCode').value;

    if (verificationCode) {
        alert(' invalid Verification code.');
        // In a real application, this is where you would process the withdrawal.
    } else {
        alert('Please enter the six verification code.');
    }
}

function logout() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}