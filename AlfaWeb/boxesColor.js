const color = ['#616DB2', '#566EB3', '#3E55A4', '#7481BF'];
let cuadrado = document.querySelectorAll('.square');
var auxAnterior;    
let randomColor = color[Math.floor(Math.random() * color.length)];
//se llena el primer color
auxAnterior = randomColor;
cuadrado[0].style.backgroundColor = randomColor;

for (let i = 1; i < cuadrado.length; i++) {
    //cambio de color
    randomColor = color[Math.floor(Math.random() * color.length)];
    //Si el color del cuadrado anterior es igual ejecuta el ciclo
    while (auxAnterior == randomColor){
        randomColor = color[Math.floor(Math.random() * color.length)];
    }
    //guardamos variables
    cuadrado[i].style.backgroundColor = randomColor;
    auxAnterior = randomColor;
}



