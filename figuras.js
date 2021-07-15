//Codigo del cuadrado

function perimetroCuadrado (lado){
    return lado*4;
}

function areaCuadrado (lado){
    return lado*lado;
}

//Codigo del triangulo

function perimetroTriangulo (lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo (base, altura){
    return (base*altura)/2;
}


//Codigo del Circulo

const radioCirculo =  4;
const pi =  Math.PI;

function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*pi;
}

function areaCirculo(radio){
    return (radio*radio)*pi;
}

//Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimeroCuadrado(){
    const value = document.getElementById('inputCuadrado').value;
    document.getElementById('resCuadrado').innerHTML=perimetroCuadrado(value);
}
function calcularAreaCuadrado(){
    const value = document.getElementById('inputCuadrado').value;
    document.getElementById('resCuadrado').innerHTML=areaCuadrado(value);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById('inputLado1').value;
    const lado2 = document.getElementById('inputLado2').value;
    const base = document.getElementById('inputBase').value;

    document.getElementById('resTriangulo').innerHTML=perimetroTriangulo(
        lado1,lado2,base
    );
}
function calcularAreaTriangulo(){
    const base = document.getElementById('inputBase').value;
    const altura = document.getElementById('inputAltura').value;

    document.getElementById('resTriangulo').innerHTML=areaTriangulo(base, altura);
}


//Circulo

function calcularPerimetroCirculo(){
    const radio = document.getElementById('inputRadio').value;
    document.getElementById('resCirculo').innerHTML=perimetroCirculo(radio);
}
function calcularAreaCirculo(){
    const radio = document.getElementById('inputRadio').value;
    document.getElementById('resCirculo').innerHTML=areaCirculo(radio);
}

//Triangulo isósceles
//Tiene dos lados de igual medida

function alturaTrianguloIsosceles(lado1, lado2, base){    
    //Formula = h = √ a^2 - ((b^2) / 4)
    if (lado1 != lado2) {
        return "Lado1 y Lado 2 deben de ser iguales";
    } else {
        const alturaTriangulo = Math.sqrt((lado1*lado1) - ((base*base)/4));
        return alturaTriangulo;
    }
}