function add() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var a = parseFloat(number1);
    var b = parseFloat(number2);
    var ketqua = a + b;

    document.getElementById("message").innerHTML = ketqua;
}

function sub() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var a = parseFloat(number1);
    var b = parseFloat(number2);
    var ketqua = a - b;

    document.getElementById("message").innerHTML = ketqua;
}

function multi() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var a = parseFloat(number1);
    var b = parseFloat(number2);
    var ketqua = a * b;

    document.getElementById("message").innerHTML = ketqua;
}

function divi() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var a = parseFloat(number1);
    var b = parseFloat(number2);
    var ketqua = a / b;

    document.getElementById("ahh").innerHTML=ketqua;
}