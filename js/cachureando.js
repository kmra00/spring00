function agregarCompra(){    
}
function vaciarCarrito() {
}
function calcularTotal() {
}


$ (document).ready(function(){
$ ("#calendario").click(function(){
    var date = new Date().toLocaleString();
    $('#mostrarfecha').text("La fecha y hora es:"+date);
});
});


$(document).ready(function(){
    $("#btnCambio").click(function(){
        // Change src attribute of image
        $("#cambioIMG").attr("src", "img/img.jpg.jpg");
    });    
});




  