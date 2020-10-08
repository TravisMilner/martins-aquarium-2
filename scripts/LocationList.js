import { useLocation } from "./LocationDataProvider.js"
import { locations } from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".loc")
    const locat = useLocation()

    let locationHtmlRep = ""
    
    for (const locs of locat) {
        locationHtmlRep += locations(locs)
    
    }

    contentElement.innerHTML += `
    <h2>Locations</h2>
    ${locationHtmlRep}
    
    `

}