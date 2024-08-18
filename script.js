let criptografiaChaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

let descriptografiaChaves = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function inicializarPagina() {
    configurarEventos();
    exibirMensagemInicial();
}


function configurarEventos() {
    document.getElementById('encryptButton').addEventListener('click', criptografarTexto);
    document.getElementById('decryptButton').addEventListener('click', descriptografarTexto);
    document.getElementById('copyButton').addEventListener('click', copiarTexto);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('#initialMessage', 'Nenhuma mensagem encontrada');
    exibirTextoNaTela('#initialMessage p', 'Digite um texto que você deseja criptografar ou descriptografar.');
}

function criptografarTexto() {
    let textoOriginal = document.getElementById('inputText').value;
    let textoCriptografado = substituirTexto(textoOriginal, criptografiaChaves);
    exibirResultado(textoCriptografado);
}

function descriptografarTexto() {
    let textoCriptografado = document.getElementById('inputText').value;
    let textoOriginal = substituirTexto(textoCriptografado, descriptografiaChaves);
    exibirResultado(textoOriginal);
}

function substituirTexto(texto, chaves) {
    let textoSubstituido = texto;
    for (let chave in chaves) {
        let valor = chaves[chave];
        textoSubstituido = textoSubstituido.split(chave).join(valor);
    }
    return textoSubstituido;
}

function exibirResultado(texto) {
    let resultadoTextarea = document.getElementById('outputText');
    resultadoTextarea.value = texto;
    alternarVisibilidadeResultado(true);
}

function copiarTexto() {
    let resultadoTextarea = document.getElementById('outputText');
    resultadoTextarea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function alternarVisibilidadeResultado(mostrar) {
    document.getElementById('initialMessage').style.display = mostrar ? 'none' : 'block';
    document.getElementById('resultSection').style.display = mostrar ? 'block' : 'none';
}

inicializarPagina();