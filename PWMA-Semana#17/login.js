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
    { imagem: 'assets/1.webp', nome: 'Arizona Cardinals', link: 'https://www.azcardinals.com/' },
    { imagem: 'assets/2.webp', nome: 'Atlanta Falcons', link: 'https://www.atlantafalcons.com/'},
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





var placares = [
    { imagem: 'assets/2.1.webp', imagem2: 'assets/2.2.webp', data: '20/07', pontos: '2x7' },
    { imagem: 'assets/2.4.webp', imagem2: 'assets/4.webp', data: '02/10', pontos: '2x3' },
    { imagem: 'assets/2.8.webp', imagem2: 'assets/13.webp', data: '21/10', pontos: '1x4' },
    { imagem: 'assets/2.3.webp', imagem2: 'assets/16.webp', data: '20/07', pontos: '0x0' }
];





var placares2 = [
    { imagem: 'assets/2.5.webp', imagem2: 'assets/5.webp', data: '20/07', pontos: '3x2' },
    { imagem: 'assets/2.6.webp', imagem2: 'assets/6.webp', data: '20/09', pontos: '1x1' },
    { imagem: 'assets/2.7.webp', imagem2: 'assets/7.webp', data: '27/04', pontos: '3x4' },
    { imagem: 'assets/2.8.webp', imagem2: 'assets/8.webp', data: '13/11', pontos: '9x4' }
];





var noticias = [
    { titulo: 'Rodada de Thanksgiving na NFL: como acompanhar e o que esperar da Semana 12', descricao: 'Dia de Ação de Graças é um dos mais celebrados nos Estados Unidos e isso reflete na principal liga de futebol americano ...',imagem: 'assets/noricia1.jpeg' },
    { titulo: 'Por que os jogadores da NFL odeiam jogar no MetLife Stadium? Aqui estão as razões', descricao: 'Facertando o Jatos de Nova York e Gigantes de Nova York no MetLife Stadium nunca é uma tarefa fácil e que muitos jogadores da ...',imagem: 'assets/noticia2.jpeg' },
    { titulo: 'NFL Black Friday football: How to watch the Miami Dolphins vs. New York Jets game', descricao: 'Friday´s Dolphins vs. Jets game will stream totally free on Amazon Prime Video. If you don´t have an Amazon Prime ...',imagem: 'assets/noticia3.jpeg' },
    { titulo: 'Como estrela dos Ravens na NFL se tornou exemplo na luta contra a diabetes', descricao: 'Baltimore Ravens e Cincinnati Bengals abre a semana 11 da liga, às 22h (Brasília), com transmissão pela ESPN no Star+ ...',imagem: 'assets/noticia4.jpeg' },
    { titulo: 'Jogador da NFL pelo Detroit Lions reclama de cheaters no Counter-Strike 2', descricao: 'Os cheaters, um problema antigo da franquia Counter-Strike, tem tomado conta dos servidores de Counter-Strike 2 e incomodado ...',imagem: 'assets/noticia5.jpeg' },
    { titulo: 'NFL mulls booting Giants out of primetime for Jets game', descricao: 'The Giants could be forced to hand a primetime home game over to the Jets. The NFL is considering swapping the two Week 14 ...',imagem: 'assets/noticia6.jpeg' },

    
];


var links = [
    { cam: 'https://gauchazh.clicrbs.com.br/esportes/noticia/2023/11/rodada-de-thanksgiving-na-nfl-como-acompanhar-e-o-que-esperar-da-semana-12-clp9zzxzu0001016xsmh5k6qc.html' },
    { cam: 'https://boainformacao.com.br/2023/11/por-que-os-jogadores-da-nfl-odeiam-jogar-no-metlife-stadium-aqui-estao-as-razoes/' },
    { cam: 'https://www.msn.com/en-us/sports/other/nfl-black-friday-football-how-to-watch-the-miami-dolphins-vs-new-york-jets-game/ar-AA1knvQL' },
    { cam: 'https://www.espn.com.br/nfl/artigo/_/id/12866931/como-estrela-dos-ravens-na-nfl-se-tornou-exemplo-na-luta-contra-a-diabetes' },
    { cam: 'https://www.espn.com.br/esports/artigo/_/id/12846263/counter-strike-jogador-nfl-detroit-lions-reclama-cheaters-cs2' },
    { cam: 'https://www.msn.com/en-us/sports/nfl/nfl-mulls-booting-giants-out-of-primetime-for-jets-game/ar-AA1knc10' }
    
];



var jogadas = [
    { data: '4 de fevereiro de 2018', time: ' Philadelphia Eagles', adversario:'New England Patriots', verM:'https://twitter.com/i/status/1248053011781484547' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    { data: '4 de fevereiro de 2018', time: '', adversario:'', verM:'' },
    
];




// Função para exibir times na lista
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






function exibirPlacares() {
    var listaPlacares = document.getElementById("listaPlacares");

    placares.forEach(function (placar) {
        var li = document.createElement("li");
        li.innerHTML = `
        <h1 class="con">
        <section class = "p">
            <img src="${placar.imagem}" alt="${placar.nome}" width="50">
            <h1 class ="x"> X </h1>
            <img src="${placar.imagem2}" alt="${placar.nome}" width="50">
        </section>
            <section class = "lA">
            <span>${placar.data}</span>
            <span class="pts">${placar.pontos}</span>
            </section>
            </h1>
            <br>
        `;
        listaPlacares.appendChild(li);
    });
}






function exibirPlacares2() {
    var listaPlacares2 = document.getElementById("listaPlacares2");

    placares2.forEach(function (placar) {
        var li = document.createElement("li");
        li.innerHTML = `
        <h1 class="con">
        <section class = "p">
            <img src="${placar.imagem}" alt="${placar.nome}" width="50">
            <h1 class ="x"> X </h1>
            <img src="${placar.imagem2}" alt="${placar.nome}" width="50">
        </section>
            <section class = "lA">
            <span>${placar.data}</span>
            <span class="pts">${placar.pontos}</span>
            </section>
            </h1>
            <br>
        `;
        listaPlacares2.appendChild(li);
    });
}



function exibirNoticias() {
    var listaNoticias = document.getElementById("listaNoticias");

    noticias.forEach(function (noticia, index) {
        var li = document.createElement("li");
        li.innerHTML = `
        <h1 class="con"  margin-top="2em">
        <section class = "n"  margin-top="2em">
        <section class="col">
        <h3 class="titulo" onclick="window.location.href='${links[index].cam}'">${noticia.titulo}</h3>
        <h2>${noticia.descricao}</h2>
        </section>
        <img src="${noticia.imagem}" alt="${noticia.titulo}" width="100" height="117">
        </section>
        </h1>
        <br>
        `;
        listaNoticias.appendChild(li);
    });
}

  