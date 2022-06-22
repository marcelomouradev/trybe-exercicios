const angulo1 = -60;
const angulo2 = 60;
const angulo3 = 60;

const somaDosAngulos = angulo1 + angulo2 + angulo3;

const seAngulosForemPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;


if (seAngulosForemPositivos) {
    if (somaDosAngulos === 180) {
        console.log("True");
    }
    else {
        console.log("False");
    };
} else {
    console.log("Erro de ângulo inválido")
}