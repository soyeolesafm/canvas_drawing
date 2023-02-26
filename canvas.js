var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')
c.fillStyle = "#E8D5C4"
c.fillRect(100,100,100,100)
c.fillStyle = "#eeeeee"
c.fillRect(200,200,100,100)
c.fillStyle = "#FFF1DC"
c.fillRect(300,300,100,100)

// line
c.beginPath()
c.moveTo(400,400)
c.lineTo(800,100)
c.lineTo(900,400)
c.strokeStyle = "#3A98B9"
c.stroke()
console.log(canvas);
console.log(c);

// circulo
c.beginPath()
c.arc(500,500,50,0,Math.PI *2, false )
c.stroke()

for (var i = 0;  i < 50; i++ ){
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    var rad = Math.random() * 55
    c.beginPath()
    c.arc(x,y,rad,0,Math.PI *2, false )
    c.stroke()
}
// challenge randomize the color of the circle
// ! how to fetch a random value from an array