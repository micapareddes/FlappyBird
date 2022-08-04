<head>
  <div align=corner>
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/993782dbef600360a61a4393555f3afc0e3c61b1/icons/JavaScript.svg" width="30px">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/993782dbef600360a61a4393555f3afc0e3c61b1/icons/HTML.svg" width="30px"> 
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/993782dbef600360a61a4393555f3afc0e3c61b1/icons/CSS.svg" width="30px">
  </div>
  
  <div align=center>
    <img src="" width=200px>
    <h1>Flappy Bird</h1>
    <img align=right src="http://img.shields.io/static/v1?label=STATUS&message=STATUS_HERE&color=GREEN&style=for-the-badge" width="145px"/>
  </div>
</head>
  
<body>

  ## About
  A recreation of the popular game "Flappy Bird" to improve my JavaScript skills. 
  I followed a playlist tutorial of a youtuber named [<strong>Mario Souto - Dev Soutinho</strong>](https://www.youtube.com/c/DevSoutinho)
   
  ## Preview here!
  
  ## Making process
  
  ### Canvas

- All of our game is going to be drawn in this tag
- Canvas is basically a region of our screen, defined by an <strong>id</strong> on our HTML sheet, to draw personalized figures.
- First, we define the canvas tag on our html sheet "index.html" and then we write an script (comands that we give for it to draw) on JavaScript

```html
<canvas id="game-canvas" width="320" height="480"></canvas>
```

```jsx
const sprites = new Image(); /*defines a new image on console via JS*/
sprites.src = './sprites.png' /*links image to an url - in this case 'sprites.png'*/

const canvas = document.querySelector('canvas') /*selects the tag 'canvas' in HTML*/
const contexto = canvas.getContext('2d')/*defines that the game is going to be 2D in the 'canvas' tag*/

contexto.drawImage( /*this is our script*/
       image,
       sx, sy
       sWidth, sHeight
       dx, dy
       dWidth, dHeight
    );
```

### Using Sprites
  - Sprites is a file of images that we're going to use to draw on canvas
  - To know the position of the image that we want on our sprite, we'll be using a photo editor. Here are two options:
    - Gimp (free) - [tutorial here](https://www.youtube.com/watch?v=nmhQqyTLUzQ&t=0s)
    - Photoshop (cost)
  
### Starting to code
  1. Creating an image on console and linking an url to 'sprites.png' save on our's project file.

```jsx
const sprites = new Image ();
sprites.src = './sprites.png';
```

2. To draw we'll use the tag ‘[context.draw image](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)’
<div align=center>
  <img src='https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage/canvas_drawimage.jpg'>
</div>

 **The syntax we'll be using**
```jsx
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```
  

3. Frames per second = 'requestAnimationFrame'.

```jsx 
function loop () { /*a game is drawing constantly, thats why we use the 'requestAnimationFrame' on loop*/
	requestAnimationFrame(loop);
}
function loop() {
    context.drawImage ( /*we have to tell the console what we're drowing*/
        sprites,
        0, 0, 
        34, 24,
        10, 50, 
        33, 24,
     );
    requestAnimationFrame(loop);
}
```

 4.  Because the bird isn't still, we have to create a const to save the position data, change the 'context.drawImage' with the values to this const and modify the numers to 'flappyBird.' and the value defined earlier. This is what we'll have:
```jsx
const flappyBird = {
	sourceX: 0, 
	sourceY: 0,
	width: 34,
	height: 24,
	x: 10,
	y: 50,
	draw() {
		context.drawImage (
        sprites,
        flappyBird.sourceX, flappyBird.sourceY, 
        flappyBird.width, flappyBird.height,
        flappyBird.x, flappyBird.y, 
        flappyBird.width, flappyBird.height,
		);
	}
}

function loop() {
    flappyBird.draw();

    requestAnimationFrame(loop);

}
```
5. Now, we'll do the same to all the other images (background, floor, etc.)
	
  <em>ps. The floor and background had a pice mising when writing the code, so this is how you fix it.<em>

```jsx
#floor
context.drawImage(
            sprites,
            floor.sourceX, floor.sourceY,
            floor.width, floor.height,
            floor.x, floor.y,
            (floor.width + floor.width),
            floor.height,
        );
#background
context.drawImage(
            sprites,
            background.sourceX, background.sourceY,
            background.width, background.height,
            background.x, background.y,
            background.width, background.height,
        );
			
        context.drawImage
            sprites,
            background.sourceX, background.sourceY,
            background.width, background.height,
            (background.x + background.width), background.y,
            background.width, background.height,
        );
```

  ## How it works
  
  ## How you can download the file
</body>
