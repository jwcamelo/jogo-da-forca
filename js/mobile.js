var q = document.querySelector("#q");
var w = document.querySelector("#w");
var e = document.querySelector("#e");
var r = document.querySelector("#r");
var t = document.querySelector("#t");
var y = document.querySelector("#y");
var u = document.querySelector("#u");
var i = document.querySelector("#i");
var o = document.querySelector("#o");
var p = document.querySelector("#p");
var a = document.querySelector("#a");
var s = document.querySelector("#s");
var d = document.querySelector("#d");
var f = document.querySelector("#f");
var g = document.querySelector("#g");
var h = document.querySelector("#h");
var j = document.querySelector("#j");
var k = document.querySelector("#k");
var l = document.querySelector("#l");
var z = document.querySelector("#z");
var x = document.querySelector("#x");
var c = document.querySelector("#c");
var v = document.querySelector("#v");
var b = document.querySelector("#b");
var n = document.querySelector("#n");
var m = document.querySelector("#m");

q.addEventListener("click", compararMobile);
w.addEventListener("click", compararMobile);
e.addEventListener("click", compararMobile);
r.addEventListener("click", compararMobile);
t.addEventListener("click", compararMobile);
y.addEventListener("click", compararMobile);
u.addEventListener("click", compararMobile);
i.addEventListener("click", compararMobile);
o.addEventListener("click", compararMobile);
p.addEventListener("click", compararMobile);
a.addEventListener("click", compararMobile);
s.addEventListener("click", compararMobile);
d.addEventListener("click", compararMobile);
f.addEventListener("click", compararMobile);
g.addEventListener("click", compararMobile);
h.addEventListener("click", compararMobile);
j.addEventListener("click", compararMobile);
k.addEventListener("click", compararMobile);
l.addEventListener("click", compararMobile);
z.addEventListener("click", compararMobile);
x.addEventListener("click", compararMobile);
c.addEventListener("click", compararMobile);
v.addEventListener("click", compararMobile);
b.addEventListener("click", compararMobile);
n.addEventListener("click", compararMobile);
m.addEventListener("click", compararMobile);


function compararMobile() {
    var palpite = this.textContent;

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