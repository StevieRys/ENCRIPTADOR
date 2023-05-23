const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
} 

function btnEncriptar(){
    let stringEncriptado = encriptar(textArea.value);
    mensaje.value = stringEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptado;
} 

function btnDesencriptar(){
    let stringDesencriptado = desencriptar(textArea.value);
    mensaje.value = stringDesencriptado;
    textArea.value = "";
}

function copiar(){
    var copyText = document.getElementById("mensaje");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    //navigator.clipboard.writeText(copyText.value);
    document.execCommand('copy');
    alert("TEXTO COPIADO: " + copyText.value);

}