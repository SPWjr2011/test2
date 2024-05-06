
const player = document.getElementById("player")
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let windowSize = `${windowHeight}, ${windowWidth}`

player.style.bottom = `${windowHeight /2}`

update ()
function update () {
    requestAnimationFrame(update)
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    player.style.bottom = `${windowHeight/2-50}px`
    player.style.left = `${windowWidth/2-50}px`
}

