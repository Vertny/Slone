car1="Carno1";
car2="Carno2"
car_x = 10;
car_y = 10;
carheight = 100;
roverwidth = 100;
car_x2 = 20;
car_y2 = 20;
carheight2 = 100;
carwidth2 = 100;
background="Canvasback"
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

function add(){
    background_img= new Image();
    background_img.onload = uploadBackground;
    background_img.src = background;

    car1_img= new Image();
    car1_img.onload = upload;
    car1_img.src = car1 ;

    car2_img= new Image();
    car2_img.onload = upload;
    car2_img.src = car2 ;
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload(){
    ctx.drawImage(rover_img, rover_x, rover_y, roverwidth, roverheight);
}