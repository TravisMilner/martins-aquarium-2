import { useFish } from "./FishDataProvider.js"
import {  Fish } from "./Fish.js"

export const FishList = () => {
    const contentElement = document.querySelector(".contentContainer__left")
    const fishes= useFish()

    let fishHTMLRepresentations = ""

    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    contentElement.innerHTML += 
    `<section class="fishList">
            ${fishHTMLRepresentations}
        </section>`
}