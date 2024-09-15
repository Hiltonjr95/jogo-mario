window.alert("Bom jogo Dudinha")
var mario = document.querySelector('.mario')
var cano = document.querySelector('.cano')

var pulo = () => {
   mario.classList.add("pulo")
   
   setTimeout(() => {
    mario.classList.remove("pulo")
   }, 500);
}

var loop = setInterval(() => {
    var posicaoCano = cano.offsetLeft
    var posicaoMario = +window.getComputedStyle(mario).bottom.replace("px" , "")
    if (posicaoCano <= 120 && posicaoCano > 0 && posicaoMario < 100){
        cano.style.animation = "none"
        cano.style.left = `${posicaoCano}px`

        mario.style.animation = "none"
        mario.style.bottom = `${posicaoMario}px`

        mario.src = "./imagens/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clearInterval(loop)
    }
}, 10);

document.addEventListener("keydown", pulo)