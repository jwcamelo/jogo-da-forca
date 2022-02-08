var temas = [
    paises = ["ALEMANHA", "ANGOLA", "ARGENTINA", "BARBADOS", "BELIZE", "BRASIL", "CAMBOJA", "CATAR", "CHILE", "CHINA", "EGITO", "ESPANHA", "GANA", "GUIANA", "HAITI", "TURQUIA", "VENEZUELA"],
    cores = ["WHITE", "BEIGE", "YELLOW", "ORANGE", "RED", "PINK", "PURPLE", "BLUE", "GREEN", "BROWN", "GRAY", "GREY", "BLACK"],
    animais = ["LEAO", "GATO", "CACHORRO", "LEOPARDO", "GUEPARDO", "TIGRE", "HIENA", "CHACAL", "JACARE", "HIPOPOTAMO", "ELEFANTE", "TOURO", "BOI", "VACA", "MARMOTA", "TATURANA", "ARIRANHA"],
    palavrasAleatorioas = [""]
]
var form = document.querySelector("#form");
var enigma = document.querySelector("#span-enigma");
var btnChutar = document.querySelector("#btn-chutar");
var entradaPalpite = document.querySelector("#input-palpite");
var letrasEnigma = [];
var acerto = 0;
var erro = 0;
var spanLetrasErradas = document.querySelector("#span-letrasErradas");
var letrasErradas = [""];
var imgForca = document.querySelector("#img-forca");
var resposta = sortarPalavra(temas);
while (resposta == "") {
    var resposta = sortarPalavra(temas)
};

entradaPalpite.focus();
preencherEnigma(resposta);



btnChutar.addEventListener("click", comparar);

function comparar() {
    var palpite = entradaPalpite.value;
    palpite = palpite.toUpperCase();

    if (palpite != "") {
        if (!verificarLetraDigitada(palpite)) {

            if (resposta.includes(palpite)) {
                for (var i = 0; i < resposta.length; i++) {
                    if (resposta[i].match(palpite) == resposta[i]) {
                        letrasEnigma[i] = palpite;
                        enigma.innerHTML = letrasEnigma.join(" ");
                        acerto++
                    }
                }
                verificarVencedor(acerto);

            } else {
                erro++;
                letrasErradas.push(palpite)
            }
        }
        carregarImagemForca(erro);
        verificarPerdedor(erro);
        spanLetrasErradas.innerHTML = letrasErradas.join(" ");


        form.reset();
        entradaPalpite.focus();
    } else {
        Swal.fire({
            title: 'Digite uma letra!',
            confirmButtonColor: "#b80b0b",
        })
        var botaoConfirma = Swal.getConfirmButton();
        botaoConfirma.addEventListener("click", function() {
            setInterval(function() {
                entradaPalpite.focus()
            }, 300);
        })
    }
}

function sortarPalavra(temas) {

    var dica = document.querySelector("#dica");
    var i = temas.length;
    var index = Math.floor(Math.random() * i);

    if (index == 0) {
        dica.innerHTML = "Dica: País"
    }
    if (index == 1) {
        dica.innerHTML = "Dica: Cor em Inglês"
    }
    if (index == 2) {
        dica.innerHTML = "Dica: Animal"
    }
    if (index == 3) {
        dica.innerHTML = "Dica: Palavra Aleatória"
    }
    var j = temas[index].length;
    var indexJ = Math.floor(Math.random() * j);
    var palavra = temas[index][indexJ];

    return palavra;
}


function preencherEnigma(resposta) {
    for (var i = 0; i < resposta.length; i++) {
        letrasEnigma.push("_ ");
    }
    enigma.innerHTML = letrasEnigma.join("");
}

function verificarVencedor(acerto) {
    if (acerto >= resposta.length) {

        Swal.fire({
            title: 'PARABENS! Voce venceu!',
            confirmButtonColor: "#BD6A3E",
        })
        var botaoConfirma = Swal.getConfirmButton();
        botaoConfirma.addEventListener("click", function() {
            location.reload();
        })
    }
}

function verificarPerdedor(erro) {
    if (erro > 6) {
        setTimeout(function() {
                Swal.fire({
                    title: 'Voce perdeu! A palavra certa era: ' + resposta,
                    confirmButtonColor: "#b80b0b",
                })
                var botaoConfirma = Swal.getConfirmButton();
                botaoConfirma.addEventListener("click", function() {
                    location.reload();
                })
            },
            300);
    }
}


function verificarLetraDigitada(palpite) {
    if (letrasErradas.indexOf(palpite) != -1) {
        Swal.fire({
            title: 'Essa letra já foi digitada!',
            confirmButtonColor: "#b80b0b",
        })
        entradaPalpite.focus();
        return true;
    }
    if (letrasEnigma.includes(palpite)) {
        Swal.fire({
            title: 'Essa letra já foi digitada!',
            confirmButtonColor: "#b80b0b",
        })
        entradaPalpite.focus();
        return true;
    }
}

function carregarImagemForca(erro) {
    if (erro == 1) {
        imgForca.classList.remove("erro0");
        imgForca.classList.add("erro1")
    }
    if (erro == 2) {
        imgForca.classList.remove("erro1");
        imgForca.classList.add("erro2")
    }
    if (erro == 3) {
        imgForca.classList.remove("erro2");
        imgForca.classList.add("erro3")
    }
    if (erro == 4) {
        imgForca.classList.remove("erro3");
        imgForca.classList.add("erro4")
    }
    if (erro == 5) {
        imgForca.classList.remove("erro4");
        imgForca.classList.add("erro5")
    }
    if (erro == 6) {
        imgForca.classList.remove("erro5");
        imgForca.classList.add("erro6")
    }
    if (erro >= 7) {
        imgForca.classList.remove("erro6");
        imgForca.classList.add("erro7")
    }
}