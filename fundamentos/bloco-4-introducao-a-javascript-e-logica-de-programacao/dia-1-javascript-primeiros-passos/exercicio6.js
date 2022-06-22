const pecaDeXadrez = "cavalo";

switch (pecaDeXadrez.toLowerCase()) {
  case "rei":
    console.log("Rei, movimenta apenas uma casa em qualquer direção.");
    break;
  case "rainha":
    console.log("Rainha, movimenta quantas casas quiser em qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo, se movimenta quantas casas quiser na diagonal.");
    break;
  case "cavalo":
    console.log("Cavalo, se movimenta em L, podendo pular por cima das outras peças.");
    break;
case "torre":
    console.log("Torre, se movimenta quantas casas quiser na horizontal e vertical.");
    break;
    case "peão":
        console.log("Peão, se movimenta apenas uma casa pra frente, no primeiro movimento pode andar duas casas pra frente.");
        break;
    default:
        console.log("Erro, não é uma peça de xadrez!");
        break;
};
