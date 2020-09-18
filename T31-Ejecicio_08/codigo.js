
var num1 = 0.0;
var num2 = 0.0;
var result = 0.0;
var operador = "";
var tstring = "";


function retr(){

    var texto = document.getElementById("texto").value;
    var cadena = "";

    for (var i = 0; i < texto.length-1; i++) {
        cadena += texto[i];
        
    }
    document.getElementById("texto").value = cadena;

}

function ce() {

    document.getElementById("texto").value = "";
    
}

function c() {
    num1 = 0.0;
    num2 = 0.0;
    result = 0.0;
    operador = "";
    tstring = "";
    document.getElementById("texto").value = "";
    document.getElementById("resul").value = "";
}


function op(id){

    var oper = document.getElementById(id).id;

    if (document.getElementById("texto") === 0){
        alert("Introduce un numero");
    }
    else{
        tstring = document.getElementById("texto").value;
        num1 = parseFloat(tstring);
        switch (oper){
            case "/":
                operador = "/";
                document.getElementById("texto").value = '';
                document.getElementById("resul").value = num1 + ' / ';
                break;
            case "raiz":
                document.getElementById("texto").value = Math.sqrt(num1);
                document.getElementById("resul").value = num1 + ' raiz= ' + Math.sqrt(num1);
                break;
            case "*":
                operador = "*";
                document.getElementById("texto").value = '';
                document.getElementById("resul").value = num1 + ' * ';
                break;
            case "%":
                operador = "%";
                document.getElementById("texto").value = '';
                document.getElementById("resul").value = num1 + ' % ';
                break;
            case "-":
                operador = "-";
                document.getElementById("texto").value = '';
                document.getElementById("resul").value = num1 + ' - ';
                break;
            case "1/x":
                document.getElementById("texto").value = 1 / num1;
                document.getElementById("resul").value = '1 / ' + num1 + ' = ' + 1 / num1;
                break;
            case "+":
                operador = "+";
                document.getElementById("texto").value = '';
                document.getElementById("resul").value = num1 + ' + ';
                break;
        }
    }
}

function num(id){

    document.getElementById("texto").value = document.getElementById("texto").value + document.getElementById(id).id; 

}

function punto() {

    if (document.getElementById("texto").value !== ""){
    
        document.getElementById("texto").value = document.getElementById("texto").value + ".";
    
    }
    
}

function mas() {

    if (document.getElementById("texto").value !== ""){
    
        document.getElementById("texto").value = "-" + document.getElementById("texto").value;
    
    }

}

function resultado(){
    tstring = "";
    tstring = document.getElementById("texto").value + ".0";
    num2 = parseFloat(tstring);

    if (operador === "/"){
        document.getElementById("texto").value = eval(num1 / num2).toFixed(2);
        document.getElementById("resul").value = document.getElementById("resul").value + num2 + '= ' + eval(num1 / num2).toFixed(2);
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "*"){
        document.getElementById("texto").value = eval(num1 * num2).toFixed(2);
        document.getElementById("resul").value = document.getElementById("resul").value + num2 + '= ' + eval(num1 * num2).toFixed(2);
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "%"){
        document.getElementById("texto").value = eval(num1 % num2).toFixed(2);
        document.getElementById("resul").value = document.getElementById("resul").value + num2 + '= ' + eval(num1 % num2).toFixed(2);
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "-"){
        document.getElementById("texto").value = eval(num1 - num2).toFixed(2);
        document.getElementById("resul").value = document.getElementById("resul").value + num2 + '= ' + eval(num1 - num2).toFixed(2);
        num1 = 0.0;
        num2 = 0.0;
    }
    else if (operador === "+"){
        document.getElementById("texto").value = eval(num1 + num2).toFixed(2);
        document.getElementById("resul").value = document.getElementById("resul").value + num2 + '= ' + eval(num1 + num2).toFixed(2);
        num1 = 0.0;
        num2 = 0.0;
    }
}

