var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var mouseevent="empty";
var last_position_x,last_position_y;
    color = "black";
    width_of_line = 2;
    
    canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
mouseevent="mouseDown"; 
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
mouseevent="mouseUp"; 
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
mouseevent="mouseLeave"; 
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_x=e.clientX - canvas.getBoundingClientRect().left;
    current_y =e.clientY - canvas.getBoundingClientRect().top; 
if (mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;  
    console.log("last position of x and y are");
    console.log("x="+last_position_x+"y="+ last_position_y) ;
    ctx.moveTo(last_position_x,last_position_y) ;

    console.log("current position of x and y are");
    console.log("x="+ current_x+"y="+ current_y) ;
    ctx.lineTo(current_x,current_y) ;
    ctx.stroke();
}
last_position_x=current_x;
last_position_y=current_y;
}




    var width=screen.width;
    new_width=width-200;
    new_height=screen.height-400;
    if (width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_position_of_x=e.touches[0].clientX-canvas.getBoundingClientRect().left;
        last_position_of_y=e.touches[0].clientY-canvas.getBoundingClientRect().top;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX-canvas.getBoundingClientRect().left;
         current_position_of_y = e.touches[0].clientY-canvas.getBoundingClientRect().top;
        
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
