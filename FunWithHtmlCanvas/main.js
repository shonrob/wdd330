const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//colors
ctx.strokeStyle = '#BADA55';
//sets the appearance of the "corners" where lines meet.
ctx.lineJoin = 'round';
//sets the apppearance of the ends of the lines.
ctx.lineCap = 'round';
//sets the width of the stroke;
ctx.lineWidth = 30;

//in order to work the mouse has to be clicked down set at false.
let isDrawing = false;
//There is always a beginning point and ending point on the coordinates (x,y)
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    //stop the function from running when they the mouse is not clicked down.
    if(!isDrawing) return;
    //console.log(e);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    //this starts the actual drawing
    ctx.beginPath();
    //starts from
    ctx.moveTo(lastX, lastY);
    //goes to these next coordinates
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    //change lastX and lastY to have the mouse move from whereever the mouse is located instead of (0,0)
    lastX = e.offsetX;
    lastY = e.offsetY;

    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    if(ctx.lineWidth >= 150 || ctx.lineWidth <= 10) {
        //reverses the direction of the width of the line
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

//Because the above starts at (0,0) this eventlistens for the mouse to click on the context canvas and then start at 
//that point and goes until the mouse isn't clicked anymore.
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
//mouseout is when the mouse isn't hovering over the canvas.
canvas.addEventListener('mouseout', () => isDrawing = false);

