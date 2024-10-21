// Classificador de nível de héroi

//USAR
/**
 * Variaveis
 * Operadores
 * Laços de repetiçao
 * estrutura de decisão
 * 
 * OBJETIVO
 * crie uma variavél para armazenar o nome e a quantidade de
 * experiencia (XP) de um héroi, depois utilize uma estrutura
 * de decisão para apresentar alguma das mensagens abaixo:
 * 
 * Se XP for menor do que 1.000 = FERRO
 * Se XP for entre do que 1.001 e 2.000 = BRONZE
 * Se XP for menor do que 2.001 e 5.000 = PRATA
 * Se XP for menor do que 6.001 e 7.000 = OURO
 * Se XP for menor do que 7.001 e 8.000 = PLATINA
 * Se XP for menor do que 8.001 e 9.000 = ASCEDENTE
 * Se XP for menor do que 9.001 e 10.000 = IMORTAL
 * Se XP for maior ou igual 10.001 = RADIANTE
 * 
 * SAIDA
 * Ao final deve se exibir uma mensagem:
 * O héroi de nome **{nome}** está no nivel **{nivel}** 
 * 
 * 
 */

let nomePersonagem = "Zelda";
let nivelPersonagem = "platina";
let niveis = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal"];
let xpAtual = 500; // XP inicial

for (let i = 0; i < niveis.length; i++) {
    nivelPersonagem = niveis[i]; // Atualiza o nível conforme o loop
    xpAtual += 1500; // Simula o aumento de XP a cada iteração

    const mensagem = `O herói de nome ${nomePersonagem} está no nível ${nivelPersonagem} com ${xpAtual} XP.`;

    if ((nivelPersonagem === "ferro" && xpAtual <= 1000) ||
        (nivelPersonagem === "bronze" && xpAtual > 1000 && xpAtual <= 2000) ||
        (nivelPersonagem === "prata" && xpAtual > 2000 && xpAtual <= 5000) ||
        (nivelPersonagem === "ouro" && xpAtual > 6000 && xpAtual <= 7000) ||
        (nivelPersonagem === "platina" && xpAtual > 7000 && xpAtual <= 8000) ||
        (nivelPersonagem === "ascendente" && xpAtual > 8000 && xpAtual <= 9000) ||
        (nivelPersonagem === "imortal" && xpAtual > 9000 && xpAtual <= 10000)) {
        console.log(mensagem);
    } else {
        console.log(`O herói ${nomePersonagem} está em um nível desconhecido.`);
    }
}

