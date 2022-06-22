const custo = 100;
const venda = 250;

let imposto = 1.20;


let valorCustoTotal = custo * imposto;
lucro = venda - valorCustoTotal;

if (custo >= 0 && venda >= 0){
    valorCustoTotal = custo * imposto;
    lucro = (venda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
    console.log("Erro, valores inexistentes.");
}
