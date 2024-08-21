const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você é um caçador de tesouros raros e valiosos indo a uma ilha em busca de uma grande fortuna escondida, ao desembarcar você pega seu mapa conquistado em uma luta de bar e parte atrás da riqueza. Caminhando pela ilha, uma enorme besta mutante aparece em sua frente, você corre e se de para com dois caminhos: ",
        alternativas: [
            {
                texto:"O primeiro é uma trilha para uma caverna, um caminho muito fechado e rochoso mas é um caminho mais curto, e é um lugar mais escondido. ",
                afirmacao: "Mas ao chegar no fim da caverna me deparei com aquele monstro, com muito medo corri direto para as montanhas, "
            },
            {
                texto: "O segundo é uma estrada em meio a floresta, as árvores impedem a passagem de luz pelo caminho, é um lugar mais aberto mas não é facil se esconder do monstro. ",
                afirmacao: "Ao chegar no fim da floresta me deparei com aquele monstro, com muito medo corri direto para as montanhas, "
            }
        ]
    },
    {
        enunciado: "A besta ainda o persegue, ela o ataca mas seu medo por ela é tão grande que a adrenalina não o faz sentir dor. Desesperado, eu começo a correr sem parar porém esse descuido acaba o colocando em perigo aonde você cai em uma ruina e por sorte você encontra uma espada jogada no chão, e você tem duas escolhas. ",
        alternativas: [
            {
                texto:"Pegar a espada e tentar lutar pela sua vida ",
                afirmacao: "porém a fera me perseguiu e me atacou brutalmente, foi quando encontrei uma espada, então decidi lutar pela minha vida, a batalha foi intensa. No fim a besta fugiu. "
            },
            {
                texto: "Ignorar a arma e continuar correndo",
                afirmacao: "porém a fera me perseguiu e me atacou brutalmente, corri por muito tempo pelo ardiloso caminho, mas no fim alcancei a saída e perdi a besta de vista.",
            }
        ]
    },
    {
        enunciado: "Você consegue com muita dificuldade passar pelo caminho, despistando a fera, deois de uma dificultosa luta e você se depara com uma entrada escondida para uma caverna muito profundo. Se aproximando dela você escorrega e acaba caindo nela. Entretanto, ela é a caverna do tesouro, mas também pode ser o seu fim, por ser uma caverna muito profundo, você está muito ferido e precisa urgentemente de auxílio médico.",
        alternativas: [
            {
                texto:"O tesouro e muito valioso para ser ignorado, seu valor pode salvar minha vida, mas infelizmente só terei condições de levar algumas moedas.",
                afirmacao: "Após o encontro com a besta, foi descuidado e cai em uma caverna, lá achei o tesouro que buscava. A fera tinha me ferido muito então só consegui levar poucas moedas. "
            },
            {
                texto: "Sua vontade de se ter esse tesouro é tão grande que você não liga para a sua própria morte, mas você não tem outra opção se não deixa-lo para trás",
                afirmacao: "Após o encontro com a besta, foi descuidado e cai em uma caverna, lá achei o tesouro que buscava. A fera tinha me ferido muito então optei por sair do local e retornar em outro momento."
            }
        ]
    },
    {
        enunciado: "Quase perdendo a conciência você consegue subir a caverna, correndo muito você volta ao seu barco, mas você tem duas opções e pensa:",
        alternativas: [
            {
                texto:"Não sairei dessa ilha sem uma boa quantia de dinheiro, voltarei a caverna mesmo ferido.",
                afirmacao: "Ao chegar em meu barco a vontade de enriquecer me dominou e decidi voltar até a caverna pelo mar. "
            },
            {
                texto: "Terei de retornar uma outra hora para buscar toda a fortuna.",
                afirmacao: "Ao chegar em meu barco, senti uma forte coragem seguida de medo de voltar para a ilha e obter aquele tesouro."
            }
        ]
    },
    {
        enunciado: "Você faz sua escolha e começa a velejar, quando de repente aparece uma tempestade e você fica apavorado, e vc pensa tendo duas opções:",
        alternativas: [
            {
                texto:"Não morrei nesta ilha irei enfrentar esta terrível tempestade. ",
                afirmacao: "Entretanto a tempestade me pegou desprevinido, mas apesar de toda a luta contra as forças da natureza, você volta pra casa e busca ajuda médica, tendo em mente que voltaria para aquela ilha e conseguiria o tesouro. "
            },
            {
                texto: "É melhor voltar a ilha e esperar, posso esperar escondido em meu barco até a tempestade acabar.",
                afirmacao: "Entretanto a tempestade me pegou desprevinido, virei o barco para a ilha, mas a tempestade veio com um poderoso raio que fez o navio naufragar, agora estou preso nesta ilha e não sei o que me espera. "
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',() => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Sua caçada pelo tesouro chegou ao fim, sua decisão foi escrever tudo o que aconteceu e futuramente publicar o livro de sua jornada. Após dois anos se preparando você volta para a ilha, com a esperança de a fera ter morrido, mas logo após sua chegada você acaba vendo uma outra fera muito mais forte daquela que você viu, e essa besta entra na caverna, e você não desiste."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();