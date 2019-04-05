var menuIcon;
var slideIndex = 1;
showSlides();


function openNav(x){
	x.style.visibility = "hidden";
	document.getElementById("mySidebar").style.width = "200px";
	document.getElementById("main").style.marginLeft = "200px";
	
}


function closeNav(){
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}