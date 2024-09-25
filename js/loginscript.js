document.getElementById('loginForm').addEventListener('submit', function(event) { 
    event.preventDefault();

    const correctUsername = 'Kelompok 6';
    const correctPassword = 'Puyeng';
    
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;
    
    if(username === correctUsername && password === correctPassword){
        alert('Login Ke Sari Alam Ga Nih??');
        window.location.href = 'index3.html';
    
    }else{
    
    alert('Salah broo');
    
    }
});
