import { useTips } from "./TipsDataProvider.js"
import { Tips } from "./Tip.js" 

export const TipList = () => {
    const contentElement = document.querySelector(".contentContainer__right")
    const tips = useTips();

    let htmlRep = ""

    for (const tip of tips) {
        htmlRep += Tips(tip)
    }

    contentElement.innerHTML += `
        ${htmlRep}
        
        `
     
}

