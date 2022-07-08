// GetElements --------
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("result")


// Button function --------

function calcular() {

// Values of inputs ------
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

// Functions name ------
    let carne = carnePP(duracao);
    let cerveja = CervejaPP(duracao);
    let refriag = RefriAgPP(duracao);

// Equation  ------
    let QtdCarne = carne * adultos + (carne / 2 * criancas);
    let QtdCerveja = cerveja * adultos;
    let QtdRefriAg = refriag * adultos + (refriag / 2 * criancas);

// Print ------
    result.innerHTML =  `<p>${QtdCarne / 1000}Kg de carne</p>`
    result.innerHTML += `<p>${Math.ceil(QtdCerveja / 355)} Latas de cerveja</p>`
    result.innerHTML += `<p>${Math.ceil(QtdRefriAg / 2000)} Garrafa(s) de refrigerante</p>`
    result.innerHTML += `<p>${Math.ceil(QtdRefriAg / 2000)} Garrafa(s) de água</p>`
}



// Calculation functions -----

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    }
    else {
        return 400
    }
}

function CervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    }
    else {
        return 1200
    }
}

function RefriAgPP(duracao) {
    if (duracao >= 6) {
        return 1500
    }
    else {
        return 1000
    }
}





