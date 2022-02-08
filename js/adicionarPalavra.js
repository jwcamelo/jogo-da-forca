var linkAdicionar = document.querySelector("#adicionar-palavra")

linkAdicionar.addEventListener("click", function() {
    Swal.fire({
        title: 'Qual palavra você quer adicionar?',
        input: 'text',
        confirmButtonColor: "#BD6A3E",
        customClass: {
            validationMessage: 'my-validation-message'
        },

        preConfirm: (value) => {
            if (!value) {
                Swal.showValidationMessage(
                    '<i class="fa fa-info-circle"></i> Por favor, digite uma palavra'
                )
            }
        }
    })
    var botaoConfirma = Swal.getConfirmButton();
    botaoConfirma.addEventListener("click", function() {
        input = Swal.getInput();
        novaPalavra = input.value;
        if (novaPalavra.length > 4) {
            novaPalavra = novaPalavra.toUpperCase();
            temas[3].push(novaPalavra)
            exibirSucesso();
        } else {
            exibirFalha();
        }



    });
});

function exibirSucesso() {
    Swal.fire({
        title: 'Palavra adicionada com sucesso!',
        confirmButtonColor: "#148506",
    })
}

function exibirFalha() {
    Swal.fire({
        title: 'Palavra inválida!',
        confirmButtonColor: "#b80b0b",
    })
}