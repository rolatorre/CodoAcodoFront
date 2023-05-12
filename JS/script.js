
    function calPrecioFinal() {
    console.log("ingreso a calcular precio");

    let cantEnt=document.getElementById("cantEntradas").value; 
    console.log("cantEnt: " + cantEnt);

  
    let porcDesc=document.getElementById("porcDescuento").value;
    console.log("porcDesc: " + porcDesc);

    
    let descuento=(cantEnt*1000) * porcDesc/100;
    console.log("descuento: " + descuento);


    let precioTotal=(cantEnt*1000) - descuento;
    console.log("preciototal: " + precioTotal);

    
    
    document.getElementById("valorTotal").value=precioTotal;
}