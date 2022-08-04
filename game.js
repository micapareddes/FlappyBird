console.log('FlappyBird');

const sprites = new Image();
sprites.src = './sprites.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

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

const flappyBird = {
    sourceX: 0,
    sourceY: 0,
    width: 34,
    height: 24,
    x: 10,
    y: 50,
    gravity: 0.25,
    velocity: 0,
    refresh() {
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

/* um jogo desenha as coisas varias vezes 'Frames Per Second', para nos ajudar com isso usamos o requestAnimationFrame
= desenha os quadros na tela da forma mais inteligente possivel */
function loop() {/* ODEM DE PRIORIDADE É LIDA DE BAIXO PRA CIMA */

    flappyBird.refresh();

    background.draw();

    floor.draw();

    flappyBird.draw();

    requestAnimationFrame(loop);

}

loop();