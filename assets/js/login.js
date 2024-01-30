//Boton para el formulario de inicio de sesión--------------------------------------------------------
let btnLogin = document.getElementById("btnLogin");
let username = document.getElementById("name-input-login");
let password = document.getElementById("password-input-login");
let avisoLogIn = document.getElementById("avisoLogIn");

btnLogin.addEventListener("click", function () {
    fetch("http://localhost:3000/users")
    .then(response => {
        return response.json();
    }).then(data => {
        let usuarioEncontrado = data.some(element => {
            return element.username === username.value && element.password === password.value;
        });

        if (usuarioEncontrado) {
            avisoLogIn.innerHTML = "";
            location.href = "../index.html";
        } else {
            avisoLogIn.innerHTML = "Oh, tus credenciales son incorrectas."
        }
    });
});



//Boton para el formulario de registro----------------------------------------------------------------
let btnRegistro = document.getElementById("btnRegistro");

btnRegistro.addEventListener("click", function() {
    let nombreRegistro = document.getElementById("name-input-signup").value; 
    let emailRegistro = document.getElementById("email-input-signup").value; 
    let passwordRegistro = document.getElementById("password-input-signup").value; 
    let phoneRegistro = document.getElementById("phone-input-signup").value; 
    let dateRegistro = document.getElementById("date-input-signup").value; 
    let checkbox = document.getElementById("checkbox").checked;
    let avisoSignUp = document.getElementById("avisoSignUp");

    if (checkbox == true) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: nombreRegistro, password: passwordRegistro, email: emailRegistro, phone: phoneRegistro, birthday: dateRegistro, money: 0, posts:[]})
        }).then(response=>{
            return response.json();
        }).then(data => {
            console.log('Usuario registrado como:', data);

            avisoSignUp.innerHTML = "";
            location.href = "../index.html";

            nombreRegistro = '';
            passwordRegistro = '';
            emailRegistro = '';
            phoneRegistro = '';
            dateRegistro = '';
        });
    } else {
        avisoSignUp.innerHTML = "Tienes que aceptar los terminos y condiciones."
    }
});