function tinhtoan(type) {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var a = parseFloat(number1);
    var b = parseFloat(number2);

    if(type ==="add"){
       var ketqua = a + b;}

    if(type ==="sub"){
       var ketqua = a - b;

    }
    if(type ==="divi"){
       var ketqua = a / b;

    }
    if(type ==="multi"){
       var ketqua = a * b;

    }
        document.getElementById("ahh").innerHTML = ketqua;
    return;
}