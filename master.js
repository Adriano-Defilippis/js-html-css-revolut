//Gestione dei menu Drop-Box nell HEADER
var dropClik = $('.buttonDropDown');
var closeHamburger = $('.close');
var hamburgerMenu = $('.hamburger-menu');

console.log(dropClik);

//Azione del clic sul link per far comparire il menù drop box
dropClik.click(function(){

  var thisMenu = $(this).next();

  thisMenu.toggleClass("active");

});

var hamburgerButton = $('#hamburgerButton');
//Azione del click sul Hamburger per far comparire Menu
hamburgerButton.click(function(){

  hamburgerMenu.toggleClass('active');

});

var closeHamburger = $('.close');
//Azione sull'icona Close per chiudere il Menu
closeHamburger.click(function(){

  hamburgerMenu.toggleClass("active");

});
