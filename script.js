const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta1",
        alternativas: [
            {
                texto: "alternativa1", 
                afirmacao: "Afirmacao1"
            },
            {
                texto: "alternativa2", 
                afirmacao: "Afirmacao2"
            }
        ]
    },
    {
        enunciado: "pergunta2", 
        alternativas: [
            {
                texto: "alternativa3", 
                afirmacao: "Afirmacao3"
            },
            {
                texto: "alternativa4", 
                afirmacao: "Afirmacao4"
            }
        ]
    },
    {
        enunciado: "pergunta3", 
        alternativas: [
            {
                texto: "alternativa5", 
                afirmacao: "Afirmacao5"
            },
            {
                texto: "alternativa6", 
                afirmacao: "Afirmacao6"
            }
        ]
    },
    {
        enunciado: "pergunta4", 
        alternativas: [
            {
                texto: "alternativa7", 
                afirmacao: "Afirmacao7"
            },
            {
                texto: "alternativa8", 
                afirmacao: "Afirmacao8"
            }
        ]
    },
    {
        enunciado: "pergunta5", 
        alternativas: [
            {
                texto: "alternativa9", 
                afirmacao: "Afirmacao9"
            },
            {
                texto: "alternativa10", 
                afirmacao: "Afirmacao10"
            }
        ]
    }

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2019...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();