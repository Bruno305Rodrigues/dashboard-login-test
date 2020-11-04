
window.addEventListener('load', function () {

    document.getElementById("total").innerHTML = somaTotal();
    document.getElementById("mediaFemale").innerText = mediaIdadeGenero("female").toFixed(2);
    document.getElementById("mediaMale").innerText = mediaIdadeGenero("male").toFixed(2);
    document.getElementById("homens").innerText = `${((totalHomens() / totalLIsta()) * 100)}%`;
    document.getElementById("barra").style.width = `${((totalHomens() / totalLIsta()) * 100)}%`;
    fotoAvatar();
    nomeAvatar();
    useremail();




});




function mediaIdadeGenero(gender) {
    var total = 0;
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === gender) {
            total += usuario.age;
            quantidade++;
        }


    }

    return total / quantidade;
}

function mediaTotal() {
    var total = 0;
    var quantidade = 0;

    for (var usuario of usersList) {

        total += usuario.age;
        quantidade++;
        console.log(quantidade);
    }

    return total / quantidade;


}

function somaTotal() {

    var total = 0;

    for (var usuario of usersList) {

        total += usuario.age;

    }

    return total;

}

function totalHomens() {
    var total = 0;
    for (var usuario of usersList) {
        if (usuario.gender === "male") {

            total++;

        }


    }
    return total;
    console.log(total);

}


function totalLIsta() {
    var quantidade = 0;

    for (var usuario of usersList) {


        quantidade++;

    }
    console.log(quantidade);

    return quantidade;

}


function fotoAvatar(foto) {

    var novoAvatar = localStorage.getItem("thumbnail");

    var avatar = document.getElementById("avatar");

    avatar.src = novoAvatar;


}


function nomeAvatar() {
    var nome = document.getElementById("nome");
    var novoNome = localStorage.getItem("name")
    nome.innerText = novoNome;

}

function useremail() {
    var email = document.getElementById("useremail");
    var novoemail = localStorage.getItem("email");
    email.innerText = novoemail;

}








