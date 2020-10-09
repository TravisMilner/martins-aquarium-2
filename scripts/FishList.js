import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import {  Fish } from "./Fish.js"

const buildFishContainerHTML = (arrayOfFish) => {
    let fishHTMLRepresentations = ""
    for (const fish of arrayOfFish) {
        fishHTMLRepresentations += Fish(fish)
    }
    return fishHTMLRepresentations
}

export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")
    const fishes= mostHolyFish()

    const holyFishHTML = buildFishContainerHTML(fishes)

    const soldierFishes = soldierFish()
    const soldierFishHTML = buildFishContainerHTML(soldierFishes)

    const regFish = nonHolyFish()
    const regFishHTML = buildFishContainerHTML(regFish)

    

    contentElement.innerHTML += 
    `<section class="fishList">
            ${holyFishHTML}
            ${soldierFishHTML}
            ${regFishHTML}
        </section>`
}