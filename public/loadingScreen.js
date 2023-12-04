const bodyEl = document.querySelector("body")

const loadingScreen = document.createElement("div")
loadingScreen.classList = "loading-screen-container"
loadingScreen.innerHTML = `<div class="loading-screen-portal"></div>
<div class="loading-screen-title">Ricks<span>vs</span>Ricks</div>
<div class="loading-screen-title loading-screen-middle"> Ricks<span>vs</span>Ricks</div>
<div class="loading-screen-title loading-screen-bottom"> Ricks<span>vs</span>Ricks</div>`

bodyEl.insertAdjacentElement("afterbegin", loadingScreen)

const portalEl = document.querySelector('.loading-screen-portal')

console.log(portalEl)

function bubbleAnimationEffect() {
    portalEl.style.transition = '1s'

    portalEl.style.borderTopLeftRadius = Math.round(Math.random() * 200 + 350) + 'px'
    portalEl.style.borderTopRightRadius = Math.round(Math.random() * 200 + 350) + 'px'
    portalEl.style.borderBottomLeftRadius = Math.round(Math.random() * 200 + 350) + 'px'
    portalEl.style.borderBottomRightRadius = Math.round(Math.random() * 200 + 350) + 'px'
    setTimeout(bubbleAnimationEffect, 1000)
}

bubbleAnimationEffect()


window.addEventListener("load", function () {
    this.setTimeout(() => {
        // loadingScreen.remove()
    }, 1000)
});