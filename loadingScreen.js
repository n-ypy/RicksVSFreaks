const bodyEl = document.querySelector("body")

const loadingScreen = document.createElement("div")
loadingScreen.classList = "loading-screen-container"
loadingScreen.innerHTML =
`<div class="loading-screen-progress-bar-container">
    <div class="loading-screen-progress-bar"></div>
</div>
<div class="loading-screen-portal"></div>
<div class="loading-screen-title">Ricks<span>vs</span>Freaks</div>
<div class="loading-screen-title loading-screen-middle"> Ricks<span>vs</span>Freaks</div>
<div class="loading-screen-title loading-screen-bottom"> Ricks<span>vs</span>Freaks</div>`

bodyEl.insertAdjacentElement("afterbegin", loadingScreen)

const portalEl = document.querySelector('.loading-screen-portal')

function bubbleAnimationEffect() {
    portalEl.style.borderTopLeftRadius = Math.round(Math.random() * 200 + 350) + 'px'
    portalEl.style.borderTopRightRadius = Math.round(Math.random() * 200 + 350) + 'px'
    portalEl.style.borderBottomLeftRadius = Math.round(Math.random() * 200 + 350) + 'px'
    portalEl.style.borderBottomRightRadius = Math.round(Math.random() * 200 + 350) + 'px'
}

portalEl.style.transition = '1s'
const bubbleAnimationInterval = setInterval(bubbleAnimationEffect, 1000)

const progressBarEl = document.querySelector('.loading-screen-progress-bar')
let i = 0
const progrssBarInterval = setInterval(() => {
    progressBarEl.style.width = `${Math.min(i, 100)}%`
    if (i >= 100) {
        clearInterval(progrssBarInterval)
    }
    i++
}, Math.floor(Math.random() * 100 + i))


const playBtnEl = document.createElement("button")
playBtnEl.type = "button"
playBtnEl.classList = "loading-screen-play-btn"
playBtnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`

playBtnEl.addEventListener("click", throwAwayElements)

function throwAwayElements() {
    const titleEls = document.querySelectorAll('.loading-screen-title')
    titleEls.forEach((el) => {
        el.classList.add('throw-away-title')
        setTimeout(()=>{el.remove()}, 900)
    })
    playBtnEl.classList.add('throw-away-btn')
    setTimeout(()=>{playBtnEl.remove()}, 900)

    portalEl.classList.add('scale-rotate-portal')
    loadingScreen.classList.add('loading-screen-opacity')
    setTimeout(()=>{
        loadingScreen.remove()
        clearInterval(bubbleAnimationInterval)
    }, 950)
    playBtnEl.removeEventListener("click", throwAwayElements)
}

const progressBarContainerEl = document.querySelector('.loading-screen-progress-bar-container')

window.addEventListener("load", function () {
    i = 100
    this.setTimeout(() => {
        progressBarContainerEl.remove()
        loadingScreen.insertAdjacentElement("afterbegin", playBtnEl)
    }, 500)
})