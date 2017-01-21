

$( document ).ready(function() {
var i=0;

    $('#alta').click(function() {
var fields = {};
$("#formulario").find(":input").each(function() {
    // The selector will match buttons; if you want to filter
    // them out, check `this.tagName` and `this.type`; see
    // below
    if($(this).val()==""){
        alert("Por favor, cargar todos los datos");
        return false;
    }
    fields[this.name] = $(this).val();
    
});

i++;

fields[this.id]=i;
var filename = fields.foto.split('\\').pop();
//alert(filename);
var obj = {fields: fields};

$('.col-md-8').append('<div class="media"><div class="media-left"><a href="#"><img class="media-object" src="assets/'+filename+'" alt="foto usuario"></a></div><div class="media-body"><p><b>Nombre:</b> '+fields.nombre+'</p><p><b>Apellido:</b> '+fields.apellido+'</p><p><b>Edad:</b> '+fields.edad+'</p><p></p></div><div class="foot-media"><b>Dirección:</b> '+fields.direccion+'</div><span class="elimino glyphicon glyphicon-remove" style="cursor:pointer;display:none;"></span></div>');
localStorage.setItem('registro'+i,JSON.stringify(fields)); 
 $(".media").animate({
        width: "45%",
		height: "295px"
    }, 500, function() {
    $('.elimino').show();
    // Animation complete.
    console.log('animacion completada');
  });
$('#formulario')[0].reset();
//alert(JSON.stringify(fields));

});


$(document).on('click','.elimino',function(){
    $(this).hide();
	$(this).parent().animate({
        width: "0",
		height: "0"
    }, 500, function() {
    $(this).remove();

    // Animation complete.
    console.log('animacion completada');
  });
     
	
});

$(document).on('click','.leftarrow',function(){
     $('.col-md-4').animate({
    opacity: 0.25,
    left: "-=50",
    height: "toggle"
  }, 500, function() {
    $('.rightarrow').show();
    // Animation complete.
    console.log('animacion completada');
  });
	
});

$(document).on('click','.rightarrow',function(){
    $('.rightarrow').hide();
     $('.col-md-4').animate({
    opacity: 1,
    left: "+=50",
    height: "toggle"
  }, 500, function() {
    
    // Animation complete.
    console.log('animacion completada');
  });
    
});


});




