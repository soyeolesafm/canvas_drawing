var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
// cuadro/rectangulo
// ? en el cuadro/rectangulo usamos "fillRect(x,t,width,height)""
// ?y usamos fillStyle para cambiar el color de nuestro cuadro/rectangulo
var c = canvas.getContext('2d')
c.fillStyle = "#E8D5C4"
c.fillRect(100,100,100,100)
c.fillStyle = "#eeeeee"
c.fillRect(200,200,100,100)
c.fillStyle = "#FFF1DC"
c.fillRect(300,300,100,100)

// line
// ?en el caso de las lineas es un poco mas compliado puesto que hay que indicar...
// ? ..m mediante la variable c que es el contexto sacado 2d del canvas que inicie
// ? el path o pasaje por asi decirlo de la linea con: " c.beginPath() "
// ? usamos "c.moveTo(w,y)" para indicar en que lugar del cuadrante queremos que inicie la linea
// ? despues con "c.lineTo(x,y)" indicamos que que nuestro path o pasaje se mueva en linea recta 
// ? hacia otra cordenada dentro del cuadrante x y usamos "c.strokeStyle="algun color"" para 
// ?...cambiar el color de la linea y por ultimo con "c.stroke()" indicamos que dubuje una linea
c.beginPath()
c.moveTo(400,400)
c.lineTo(800,100)
c.lineTo(900,400)
c.strokeStyle = "#3A98B9"
c.stroke()
console.log(canvas);
console.log(c);

// circulo
// ? para dibujar un circulo en el canvas por medio de javascript llamando "arc"...
// ? ... la forma de hacerlo es : c.arc(x,y, angulo de inicio, angulo final que es pi * 2..
// ? ... , hacia o en contra de las manesillas del reloj)
c.beginPath()
c.arc(500,500,50,0,Math.PI *2, false )
c.stroke()


// for (var i = 0;  i < 50; i++ ){
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight
//     var rad = Math.random() * 55
//     c.beginPath()
//     c.arc(x,y,rad,0,Math.PI *2, false )
//     c.strokeStyle = "red"
//     c.stroke()
//     console.log(x);
// }
// challenge randomize the color of the squares
// *challenge update randmize the colors of the lines
// ? reto cambiar el color de las lineas del circulo de manera aleatoria


// todo 1 make an array for the color (i am goig easy and chosing only 3 or maybe 4 colors)
// todo 2 use random to pick a random number for the array
//  todo 3 make a process that randomly choose a color an assigned to c.strokeStyle
// ? hacer un arrat para almacenar los colores usar la funcion Math.random () para ...
// ? ... obtener un numero random y usarlo com index para seleccionar uno de los colores del array
for (var i = 0;  i < 50; i++ ){
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    var rad = Math.random() * 55
    // challenge code ->
    var colorArr = ['red', 'blue', 'green', 'yellow', 'black']
    var randomIndex = Math.floor(Math.random() * colorArr.length)
    var randomColor = colorArr[randomIndex]
    //  <- agregar randomColor a c strokeStyle 
    c.beginPath()
    c.arc(x,y,rad,0,Math.PI *2, false )
    c.strokeStyle = randomColor
    c.stroke()
    console.log(randomIndex);
}

