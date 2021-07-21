const cupones = [{
    id:1, 
    cupon:'primera-compra',
    descuento:15,// %
    nombre:'Primera Compra', 
    descripcion:'Cupon aplicable solo en la primera compra', 
    limite: 10
},{
    id:2, 
    cupon:'verano21', 
    descuento:10, // %
    nombre:'Verano 2021',
    descripcion:'Cupon valido solo en el verano de 2021, maximo 20 cupones disponibles', 
    limite: 20
},{
    id:2, 
    cupon:'secreto', 
    descuento:Math.floor(Math.random() * (40 - 10 + 1)) + 10, // %
    nombre:'Verano 2021',
    descripcion:'Cupon valido solo en el verano de 2021, maximo 20 cupones disponibles', 
    limite: 15
}];


function showInput(){
    document.getElementById('smallCupon').style.display = 'none';
    document.getElementById('inputCupon').style.display = 'block';
    document.getElementById('applyCupon').style.display = 'block';
}
function hiddeInput(){
    document.getElementById('smallCupon').style.display = 'block';
    document.getElementById('inputCupon').style.display = 'none';
    document.getElementById('applyCupon').style.display = 'none';
}
function applyCupon(){
    let cupon = document.getElementById('inputCupon').value;

    if(cupon == ""){
        limpiar()
    }else{
        cupones.forEach(function(c){
            if(c.cupon==cupon.toLowerCase()){
                document.getElementById('errorCupon').innerHTML="Cupon aplicado"
                document.getElementById('costoCard').style.textDecoration="line-through";
                document.getElementById('costoCard').style.fontSize="12px";
                document.getElementById('costoCardNumber').style.fontSize="12px";
                document.getElementById('newCostoCard').style.display = 'block';
                
                document.getElementById('spanPorcentaje').innerHTML=  '- '+c.descuento+'%';
                document.getElementById('spanPorcentaje').style.display = 'flex';
                let precio = document.getElementById('costoCardNumber').innerHTML;
                console.log('aqui',precio);
                let descuento = (parseFloat(precio) * (100 - c.descuento))/100;
                document.getElementById('newCostoCard').innerHTML=String(descuento.toFixed(2)) + "MXN";

            }else{
                /* limpiar() */
            }
        });        
    }
    hiddeInput();
}

function limpiar(){
    document.getElementById('errorCupon').innerHTML="Cupon invalido"
    document.getElementById('costoCard').style.textDecoration="none";
    document.getElementById('costoCard').style.fontSize="16px";
    document.getElementById('costoCardNumber').style.fontSize="16px";
    document.getElementById('newCostoCard').style.display = 'none';
    
    document.getElementById('spanPorcentaje').style.display = 'none'; 
}