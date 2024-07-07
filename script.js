function encriptarTexto() {

    const txtarea = document.getElementById("text_digitado");
    const textoDigitado = txtarea.value;
    const textoTratado = textoDigitado.trim();

    // Substitui letras
    function substituir(palavra) {
        const regras = {
            a: "ai",
            e: "enter",
            i: "imes",
            o: "ober",
            u: "ufat"
        };

        function aplicarRegras(letra) {
            return regras[letra] || letra;
        }

        const novaPalavra = palavra.split("").map(aplicarRegras).join("");
        return novaPalavra;
    }

    // Substitui todas as vogais
    const palavraEncriptada = textoTratado.replace(/[aeiou]/gi, substituir);
    document.getElementById("output").textContent = palavraEncriptada;

}



function descriptarTexto() {
    // Captura o elemento <textarea> pelo ID
    const txtarea = document.getElementById("text_digitado");
    // Obtém o valor do texto digitado
    const textoDigitado = txtarea.value;
    // Trata o texto (por exemplo, remover espaços em branco extras)
    const textoTratado = textoDigitado.trim();

    // Função para substituir as letras encriptadas pelas originais
    function desfazerSubstituicao(palavra) {
        const regrasInversas = {
            ai: "a",
            enter: "e",
            imes: "i",
            ober: "o",
            ufat: "u"
        };

        function aplicarRegrasInversas(letra) {
            return regrasInversas[letra] || letra;
        }

        const novaPalavra = palavra.split(" ").map(aplicarRegrasInversas).join(" ");
        return novaPalavra;
    }


    const palavraDescriptada = textoTratado.replace(/ai|enter|imes|ober|ufat/gi, desfazerSubstituicao);


    document.getElementById("output").textContent = palavraDescriptada;
}


function copiarTexto() {
    const paragrafo = document.getElementById("output");
    const texto = paragrafo.textContent;


    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch((error) => {
            console.error("Erro ao copiar o texto:", error);
        });
}

function limparElementos() {
    const textarea = document.getElementById("text_digitado");
    const paragrafo = document.getElementById("output");

    // Limpa o conteúdo dos elementos
    textarea.value = "";
    paragrafo.textContent = "";

    alert("Elementos limpos!");
}
function mostrarTag1() {
    const tag1 = document.getElementById("tag1");
    tag1.style.display = "block"; // Altera o estilo para exibir a primeira tag
    tag2.style.display = "none";

}

function mostrarTag2() {
    const tag2 = document.getElementById("tag2");
    tag2.style.display = "block"; // Altera o estilo para exibir a segunda tag
    tag1.style.display = "none";
    const fotoAlura = document.getElementById("fotoAlura");
    fotoAlura.style.display = "block";
}
