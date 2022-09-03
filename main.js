//Create a reference for canvas 
canvas=document.getElementById("lienzo");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";
var ancho = 100
var alto =90
//Set initial position for a car image.
var position_x = 10
var position_y = 10
function add() {
	fondoImgNvo = new Image();
	fondoImgNvo.onload = uploadBackground
	fondoImgNvo.src = imagen_fondo
	greencarimgNvo = new Image();
	greencarimgNvo.onload=uploadgreencar;
	greencarimgNvo.src =  greencar_image
}

function uploadBackground() {
	ctx.drawImage(fondoImgNvo,0,0,canvas.width,canvas.heiht)

}

function uploadgreencar() {
	ctx.drawImage(greencarimgNvo.greencar_image,position_x,position_y,ancho,alto)
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (position_y >=0)
{
	position_y = position_y - 10;
	console.log("Cuando flecha arriba es presionada, x="+position_x+"-y="+position_y);
	uploadBackground();
	uploadgreencar();
}

}

function down()
{
	if (position_y <=500)
{
	position_y = position_y + 10;
	console.log("Cuando flecha abajo es presionada, x="+position_x+"-y="+position_y);
	uploadBackground();
	uploadgreencar();
}
}

function left()
{
	if (position_x >=0)
{
	position_x = position_x - 10;
	console.log("Cuando flecha izquierda es presionada, x="+position_x+"-y="+position_y);
	uploadBackground();
	uploadgreencar();
}
}

function right()
{
	if (position_x >=0)
	{
		position_x = position_x + 10;
		console.log("Cuando flecha derecha es presionada, x="+position_x+"-y="+position_y);
		uploadBackground();
		uploadgreencar();
	}	
}
