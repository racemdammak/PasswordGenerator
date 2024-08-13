let num = "0123456789";
let sym = "&#@(){}[]_-+-*/=!?";
let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let low = "abcdefghijklmnopqrstuvwxyz";

function passgenerator(len, allpossible) {
    let pass = "";
    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * allpossible.length);
        pass += allpossible.charAt(index);
    }
    return pass;
}

function generatePassword() {
    let allpossible = "";

    if (document.getElementById("includesNUM").checked) {
        allpossible += num;
    }
    if (document.getElementById("includesSYM").checked) {
        allpossible += sym;
    }
    if (document.getElementById("includesUPP").checked) {
        allpossible += upp;
    }
    if (document.getElementById("includesLOW").checked) {
        allpossible += low;
    }

    if (allpossible === "") {
        document.getElementById("result").textContent = "Please choose what your password includes!";
    } else {
        let len = document.getElementById("length").value;
        let generatedPassword = passgenerator(len, allpossible);
        document.getElementById("result").textContent = generatedPassword;
    }
}
