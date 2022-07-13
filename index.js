var floral = document.querySelector(".floral_btn");
var shirts = document.querySelector(".shirts_btn");
var womens = document.querySelector(".womens_btn");
var formals = document.querySelector(".formals_btn");


 floral.onclick = function() {

    var pro = document.getElementsByClassName("pro");
    for(var i=0;i<pro.length;i++)
    {

 	pro[i].style.display="none";
	 }

 	var floral_shirt = document.getElementsByClassName("floral");
    for(var i=0;i<floral_shirt.length;i++)
    {

 	floral_shirt[i].style.display="block";
 }
 }

 shirts.onclick = function() {

 	var pro = document.getElementsByClassName("pro");
    for(var i=0;i<pro.length;i++)
    {

 	pro[i].style.display="none";
	 }

 	var shirts = document.getElementsByClassName("shirts");
    for(var i=0;i<shirts.length;i++)
    {

 	shirts[i].style.display="block";
 }
 }
 womens.onclick = function() {

 	var pro = document.getElementsByClassName("pro");
    for(var i=0;i<pro.length;i++)
    {

 	pro[i].style.display="none";
	 }

 	var womens = document.getElementsByClassName("womens");
    for(var i=0;i<womens.length;i++)
    {

 	womens[i].style.display="block";
 }
 }

 formals.onclick = function() {
 	
 	var pro = document.getElementsByClassName("pro");
    for(var i=0;i<pro.length;i++)
    {

 	pro[i].style.display="none";
	 }

 	var formals = document.getElementsByClassName("formals");
    for(var i=0;i<formals.length;i++)
    {

 	formals[i].style.display="block";
 }
 }


var removeButton = document.querySelector(".cart-remove");

removeButton.addEventListener('click',function(){
     
     console.log("clicked");

});