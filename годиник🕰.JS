const strilkaSekundna = document.getElementById("секундна-стрілка");

setInterval(diya, 1000);
secund = 0;

function diya() {
    secund += 1;
    strilkaSekundna.style.rotate = secund * 6 + 'deg';
    
}