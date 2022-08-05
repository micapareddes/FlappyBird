console.log('FlappyBird');

const hitSound = new Audio();
hitSound.src = './effects/hit.wav';

const jumpSound = new Audio();
jumpSound.src = './effects/jump.wav';

const sprites = new Image();
sprites.src = './img/sprites.png';

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//-flappy bird---------
function newFlappyBird(){
    const flappyBird = {
        sourceX: 0,
        sourceY: 0,
        width: 34,
        height: 24,
        x: (canvas.width / 2) - 100 / 2,
        y: 180,
        gravity: 0.25,
        velocity: 0,
        jumping: 4.6,
        jump(){
            console.log('i jump');
            flappyBird.velocity = -flappyBird.jumping;
            jumpSound.play();
        },
        refresh() {
            if (collide(flappyBird, floor)){

                console.log('bird collied');

                hitSound.play();

                setTimeout(() => {
                    changeScreen(screens.getReady);
                },500);
                return;
            }
    
            flappyBird.velocity = flappyBird.velocity + flappyBird.gravity; /* para que a velocidade aumente conforme o flappy bird desce */
            flappyBird.y = flappyBird.y + flappyBird.velocity; /* para que caia */
        },
        draw() {
            context.drawImage(
                sprites, /* image= imagem que vamos usar, nesse caso sprites */
                flappyBird.sourceX, flappyBird.sourceY, /* sprite X, sprite Y /* pedaço da imagem, sprites, que vamos pegar */
                flappyBird.width, flappyBird.height, /* tamanho do recorte na sprite */
                flappyBird.x, flappyBird.y, /* tamanho do x e y no canvas*/
                flappyBird.width, flappyBird.height, /* tamanho do width e height no canvas */
            );
        },
    };
    return flappyBird;
};

function collide(flappyBird, floor){
    const flappyBirdY = flappyBird.y + flappyBird.height;
    const floorY = floor.y;
    
    if(flappyBirdY >= floorY){
        return true;
    }

    return false;
};

//-landscape------------
const background = {
    sourceX: 390,
    sourceY: 0,
    width: 276,
    height: 204,
    x: 0,
    y: canvas.height - 204,
    draw() {
        context.fillStyle = '#70c5ce'; /* cor que sera preenchida a area determiinada no fillReact */
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.drawImage(
            sprites,
            background.sourceX, background.sourceY,
            background.width, background.height,
            background.x, background.y,
            background.width, background.height,
        );

        context.drawImage( /* para completar imagem */
            sprites,
            background.sourceX, background.sourceY,
            background.width, background.height,
            (background.x + background.width), background.y,
            background.width, background.height,
        );
    },
};

const floor = {
    sourceX: 0,
    sourceY: 610,
    width: 224,
    height: 112,
    x: 0,
    y: canvas.height - 112,
    draw() {
        context.drawImage(
            sprites,
            floor.sourceX, floor.sourceY,
            floor.width, floor.height,
            floor.x, floor.y,
            (floor.width + floor.width),/* para completar imagem do chão */
            floor.height,
        );
    },
};

//-screens----------
function start(){
    global.flappyBird = newFlappyBird();
};

const global = {};

let activeScreen = {};
function changeScreen(newScreen){
    activeScreen = newScreen;
    if(activeScreen.start){
        start();
    };
};

const screens = {
    getReady: {
        start(){},
        draw() {
            background.draw();
        
            floor.draw();
        
            global.flappyBird.draw();

            getReady.draw();
            
        },
        click(){
            changeScreen(screens.gamePlay);
        },
        refresh() {},
    },

    gamePlay: {
        draw(){

            background.draw();
        
            floor.draw();
        
            global.flappyBird.draw();
        },
        click() {
            global.flappyBird.jump();
        },
        refresh() {
            global.flappyBird.refresh();
        },
    },
};

const getReady = {
    sX: 134,
    sY: 0,
    w: 174,
    h: 152,
    x: (canvas.width / 2) - 172 / 2,
    y: 100,
    draw() {
        context.drawImage(
            sprites,
            getReady.sX, getReady.sY,
            getReady.w, getReady.h,
            getReady.x, getReady.y,
            getReady.w, getReady.h,
        );

    },
};


function loop() {/* ODEM DE PRIORIDADE É LIDA DE BAIXO PRA CIMA */
    activeScreen.draw();
    activeScreen.refresh();

    requestAnimationFrame(loop);/* um jogo desenha as coisas varias vezes 'Frames Per Second', para nos ajudar com isso usamos o requestAnimationFrame = desenha os quadros na tela da forma mais inteligente possivel */

}

window.addEventListener('click', function (){
    if (activeScreen.click){
        activeScreen.click();
    }
});

changeScreen(screens.getReady);
loop();