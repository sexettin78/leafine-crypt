document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('encryptButton').addEventListener('click', function() {
        encryptText();
    });

    document.getElementById('decryptButton').addEventListener('click', function() {
        decryptText();
    });
});

function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";

    var reversedText = inputText.split("").reverse().join("");

    for (var i = 0; i < reversedText.length; i++) {
        var ascii = reversedText.charCodeAt(i);
        var encryptedAscii;
        if (i % 2 === 0) {
            encryptedAscii = ascii + 5;
        } else {
            encryptedAscii = ascii + 1;
        }
        outputText += String.fromCharCode(encryptedAscii);
    }
    document.getElementById("outputText").value = outputText;
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var ascii = inputText.charCodeAt(i);
        var decryptedAscii;
        if (i % 2 === 0) {
            decryptedAscii = ascii - 5;
        } else {
            decryptedAscii = ascii - 1;
        }
        outputText += String.fromCharCode(decryptedAscii);
    }

    outputText = outputText.split("").reverse().join("");

    document.getElementById("outputText").value = outputText;
}
