import { useTips } from "./TipsDataProvider.js"
import { Tips } from "./Tip.js" 

export const TipList = () => {
    const contentElement = document.querySelector(".contentContainer__right")
    const tips = useTips();

    let htmlRep = ""

    for (const tiP of tips) {
        htmlRep += Tips(tiP)
    }

    contentElement.innerHTML += `
        <p>${htmlRep}</p>
        <p>This is test</p>
        `
      console.log(htmlRep)
}

