const color = ['#616DB2', '#566EB3', '#3E55A4', '#7481BF'];

let cuadrado = document.querySelectorAll('.square');

let FirtColor;

for (let i = 0; i < cuadrado.length; i++) {
    
    
    let randomColor = color[Math.floor(Math.random() * color.length)];

        
            cuadrado[i].style.backgroundColor = randomColor;
   
    

}





