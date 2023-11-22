<header>
        <h1>Touchdown Tracker</h1>
        <nav>
            <a href="home.html" class = "nome"> Touchdown Tracker </a>
            <a href="times.html"> Times </a>
            <a href="placares.html"> Placares </a>
            <a href="noticias.html"> Notícias </a>
            <a href="melhoresJogadas.html"> Melhores Jogadas </a>
            <a href="login.html"> Login/Cadastre-se </a>
            
         </nav>  
    
    </header>

    <section id="loginForm" style="display: block;">
        <h2>Login</h2>
        <form onsubmit="login(event)">
            <label for="username">Usuário:</label>
            <input type="text" id="username" required>

            <label for="password">Senha:</label>
            <input type="password" id="password" required>

            <button type="submit">Entrar</button>
        </form>
    </section>

<section id="welcomeMessage" style="display: none;">
        <h2>Bem-Vindo/a Heloysa!</h2>
    </section>

JAVASCRIPT
function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.style.display = "block";
    welcomeMessage.style.display = "none";
}

function showWelcomeMessage() {
    var loginForm = document.getElementById("loginForm");
    var welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.style.display = "none";
    welcomeMessage.style.display = "block";
}

function login(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "santos.heloysaarruda@gmail.com" && password === "helo1234") {
        alert("Login bem-sucedido!");
        showWelcomeMessage();
    } else {
        alert("Login falhou. Verifique seu usuário e senha.");
    }
}