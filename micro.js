var slides = [

{
title:"Meet Surface Pro",
desc:"This laptop's unrivalled flexibility and AI features enable you to do more.",
img:"images/img1.png",
btn:"Learn more"
},

{
title:"Microsoft 365",
desc:"Introducing Microsoft 365 Premium with powerful AI tools.",
img:"images/img2.png",
btn:"Discover Microsoft 365 Premium"
}


];

var index = 0;
var timer;

function showSlide(){

document.getElementById("slideImage").src = slides[index].img;
document.getElementById("title").innerText = slides[index].title;
document.getElementById("desc").innerText = slides[index].desc;
document.getElementById("btn").innerText = slides[index].btn;

updateDots();

}

function changeSlide(){

showSlide();

index++;

if(index >= slides.length){
index = 0;
}

timer = setTimeout(changeSlide,5000);

}

function pauseSlide(){
clearTimeout(timer);
}

function nextSlide(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide();

}

function prevSlide(){

index--;

if(index < 0){
index = slides.length-1;
}

showSlide();

}

function currentSlide(n){

index = n;
showSlide();

}

function updateDots(){

var dots = document.querySelectorAll(".dot");

dots.forEach(dot => dot.classList.remove("active"));

dots[index].classList.add("active");

}

changeSlide();