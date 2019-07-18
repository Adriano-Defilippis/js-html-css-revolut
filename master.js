//Gestione dei menu Drop-Box nell HEADER
var linkElement = document.getElementById('nav-bar-right');
var dropClik = $('.buttonDropDown');

console.log(dropClik);

//Azione del clic sul link per far comparire il menù drop box
dropClik.click(function(){

  var thisMenu = $(this).next();

  thisMenu.toggleClass("active");

});
