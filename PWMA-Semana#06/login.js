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
// Simulação de banco de dados
var times1 = [
    { imagem: 'assets/1.jpg', nome: 'Arizona Cardinals', link: 'https://www.azcardinals.com/' },
    { imagem: 'assets/2.jpg', nome: 'Atlanta Falcons', link: 'https://www.atlantafalcons.com/'},
    { imagem: 'assets/3.webp', nome: 'Carolina Panthers', link: 'https://www.panthers.com/'},
    { imagem: 'assets/4.webp', nome: 'Chicago Bears', link:'https://www.chicagobears.com/' },
    { imagem: 'assets/5.webp', nome: 'dallas cowboys', link:'https://www.dallascowboys.com/' },
    { imagem: 'assets/6.webp', nome: 'detroit lions', link:'https://www.detroitlions.com/' },
    { imagem: 'assets/7.webp', nome: 'Green Bay Packers', link:'https://www.packers.com/' },
    { imagem: 'assets/8.webp', nome: 'Los Angeles Rams', link:'https://www.therams.com/' }
];






var times2 = [
    { imagem: 'assets/2.1.webp', nome: 'baltimore ravens', link: 'https://www.baltimoreravens.com/' },
    { imagem: 'assets/2.2.webp', nome: 'buffalo bills', link: 'https://www.buffalobills.com/'},
    { imagem: 'assets/2.3.webp', nome: 'Cincinnati Bengals', link: 'https://www.bengals.com/'},
    { imagem: 'assets/2.4.webp', nome: 'cleveland browns', link:'https://www.clevelandbrowns.com/' },
    { imagem: 'assets/2.5.webp', nome: 'denver broncos', link:'https://www.denverbroncos.com/' },
    { imagem: 'assets/2.6.webp', nome: 'houston texans', link:'https://www.houstontexans.com/' },
    { imagem: 'assets/2.7.webp', nome: 'Indianapolis Colts', link:'https://www.colts.com/' },
    { imagem: 'assets/2.8.webp', nome: 'Jacksonville Jaguars', link:'https://www.jaguars.com/' }
];

// Função para exibir produtos na lista
function exibirTimes() {
    var listaTimes = document.getElementById("listaTimes");

    times1.forEach(function (time) {
        var li = document.createElement("li");
        li.innerHTML = `
        <h1>
            <img src="${time.imagem}" alt="${time.nome}" width="50">
            <section class = "lA">
            <span>${time.nome}</span>
            <a href="${time.link}"> Vizualizar site completo </a>
            </section>
            </h1>
            <br>
        `;
        listaTimes.appendChild(li);
    });
}



function exibirTimes2() {
    var listaTimes2 = document.getElementById("listaTimes2");

    times2.forEach(function (time) {
        var li = document.createElement("li");
        li.innerHTML = `
        <h1>
            <img src="${time.imagem}" alt="${time.nome}" width="50">
            <section class = "lA">
            <span>${time.nome}</span>
            <a href="${time.link}"> Vizualizar site completo </a>
            </section>
            </h1>
            <br>
        `;
        listaTimes2.appendChild(li);
    });
}
