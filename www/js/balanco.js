// balanca.js

// Pega os elementos
const inputGramas = document.getElementById("input-gramas");
const inputProduto = document.getElementById("input-produto");
const inputPeso = document.getElementById("input-peso");

const resultadoBox = document.getElementById("caixa-resultado");
const resultadoFinal = document.getElementById("resultado-final");
const resultadoKG = document.getElementById("resultado-kg");
const resultadoSemCaixa = document.getElementById("resultado-sem-caixa"); // NOVO

const alertaBug = document.getElementById("bug-alert");

// Função de cálculo
function calcularPesoTotal() {
    const gramasStr = inputGramas.value;
    const produtosStr = inputProduto.value;
    const pesoStr = inputPeso.value;

    const gramas = parseFloat(gramasStr);
    const produtos = parseFloat(produtosStr);
    const pesoCaixa = parseFloat(pesoStr);

    // Verifica se algum campo está vazio ou é zero
    const algumZero = gramas === 0 && produtos === 0 && pesoCaixa === 0 || gramas === 0 || produtos == 0 || pesoCaixa == 0;

    if (algumZero) {
        alertaBug.style.color = "black";
        alertaBug.style.backgroundColor = "orange";
        alertaBug.innerHTML = "Digite um valor valido";
        resultadoBox.style.display = "none";
        return;
    } else {
        alertaBug.style.color = "";
        alertaBug.style.backgroundColor = "";
        alertaBug.innerHTML = "Em Desenvolvimento!";
    }

    if (!isNaN(gramas) && !isNaN(produtos) && !isNaN(pesoCaixa)) {
        const pesoSemCaixa = gramas * produtos;
        const pesoTotal = pesoSemCaixa + pesoCaixa;
         
          
        // Peso total com a caixa
        const totalKG = pesoTotal / 1000;
        resultadoFinal.innerText = totalKG.toFixed(2).replace('.', ',');
        resultadoKG.innerText = " kg";
        
        // Peso apenas dos kits
        const totalSemCaixaKG = pesoSemCaixa / 1000;
        
        resultadoSemCaixa.innerText = `Sem o peso da caixa: ${totalSemCaixaKG.toFixed(2).replace('.', ',')} kg`;

        resultadoSemCaixa.style.display = "block";
        resultadoBox.style.display = "block";
    } else {
        resultadoBox.style.display = "none";
        resultadoSemCaixa.style.display = "none";

    }
}

// Eventos nos inputs
inputGramas.addEventListener("input", calcularPesoTotal);
inputProduto.addEventListener("input", calcularPesoTotal);
inputPeso.addEventListener("input", calcularPesoTotal);
