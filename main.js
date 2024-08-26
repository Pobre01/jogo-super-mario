const mario = document.querySelector(".mario");
const pipe = ducument.querySelector(".pipe");

const jump = () => {
    mario.classList.add('jump');

    setInterval(() => {
        mario.classList.remove("jump");
    }
,500 );
}

const loop = setInterval(() => {});



















document.addEventListener('keydown', jump);

