const mario = document.querySelector(".mario");
const pipe = ducument.querySelector(".pipe");

const jump = () => {
    mario.classList.add('jump');

    setInterval(() => {
        mario.classList.remove("jump");
    }
,500 );
}

const loop = setInterval(() => {
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.animation = "none";
        mario.style.left = `${marioPosition}px`;
    
        mario.src = "/img/game-over.png";
        mario.style.width = "75px";
        mario.style.marionLeft = "50px";

        clearInterval(loop);

},10);

document.addEventListener("keydown", jump);



















document.addEventListener('keydown', jump);

