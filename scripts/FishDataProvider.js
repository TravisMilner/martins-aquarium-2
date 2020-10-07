const fishCollection = [
    {
        image: `https://m.liveaquaria.com/images/categories/large/lg80188OcellarisClownfish.jpg`
        name: "Bozo",
        species: "Amiphiprioninae",
        length: 4.3,
        location: "Red Sea",
        diet: "Algae",
    },

    {
        image: `https://thumbs-prod.si-cdn.com/AD4YpjoYIUMjbWaOMTvLVuR6s5E=/420x240/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg`,
        name: "Bob",
        species: "Psychrolutes marcidus",
        length: 6,
        location: "Australia",
        diet: "crustaceans",
    }
]

export const useFish = () => {
    return fishCollection.slice()
}