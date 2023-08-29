var buttonMore = document.querySelector("#hotlineBox");
var phone = document.querySelector("#phone");
var zalo = document.querySelector("#zalo");
var facebook = document.querySelector("#facebook");
var angleOpen = document.querySelector("#angleR");
var angleClose = document.querySelector("#angleL");

angleOpen.addEventListener('click', function() {
    buttonMore.style.width = '200px';
    phone.style.display = 'block';
    zalo.style.display = 'block';
    facebook.style.display = 'block';
    angleOpen.style.display = 'none';
    angleOpen.style.animation = 'rotateIn 0.5s linear' ;
    angleClose.style.display = 'block';
    angleClose.style.animation = 'rotateOut 0.5s linear' ;
});

angleClose.addEventListener('click', function() {
    buttonMore.style.width = '50px';
    phone.style.display = 'none';
    zalo.style.display = 'none';
    facebook.style.display = 'none';
    angleOpen.style.display = 'block';
    angleClose.style.display = 'none';
    angleClose.style.animation = 'rotateIn 0.5s linear' ;
    angleOpen.style.animation = 'rotateOut 0.5s linear' ;
});