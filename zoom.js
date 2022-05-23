let x = 100;
let y = 100;
let zoomele = document.getElementsByClassName('zoomelement');
function zoom(value) {
    x=value/100;
    y=value/100;
    zoomele[0].style.transform = 'scaley('+ y +') scalex('+ x +')';
}


