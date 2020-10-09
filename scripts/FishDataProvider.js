const fishCollection = [
    {
        image: `https://m.liveaquaria.com/images/categories/large/lg80188OcellarisClownfish.jpg`,
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
    },
    {
        image: `https://thumbs-prod.si-cdn.com/AD4YpjoYIUMjbWaOMTvLVuR6s5E=/420x240/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg`,
        name: "Bob1",
        species: "Psychrolutes marcidus",
        length: 39,
        location: "Australia",
        diet: "crustaceans",
    },
    {
        image: `https://thumbs-prod.si-cdn.com/AD4YpjoYIUMjbWaOMTvLVuR6s5E=/420x240/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg`,
        name: "Bob2",
        species: "Psychrolutes marcidus",
        length: 1,
        location: "Australia",
        diet: "crustaceans",
    },
    {
        image: `https://thumbs-prod.si-cdn.com/AD4YpjoYIUMjbWaOMTvLVuR6s5E=/420x240/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg`,
        name: "Bob3",
        species: "Psychrolutes marcidus",
        length: 23,
        location: "Australia",
        diet: "crustaceans",
    },
    {
        image: `https://thumbs-prod.si-cdn.com/AD4YpjoYIUMjbWaOMTvLVuR6s5E=/420x240/https://public-media.si-cdn.com/filer/Blobfish-ugly-470.jpg`,
        name: "Bob4",
        species: "Psychrolutes marcidus",
        length: 5,
        location: "Australia",
        diet: "crustaceans",
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    const holyFish = []

    for (const fishy of fishCollection) {
        if (fishy.length % 3 === 0)
        holyFish.push(fishy)
    }
    return holyFish 
} 

export const soldierFish = () => {
    const soldierFish = []

    for (const soldier of fishCollection) {
        if (soldier.length % 5 === 0 && soldier.length % 3 !== 0)
        soldierFish.push(soldier)
    }
    return soldierFish;
}

export const nonHolyFish = () => {
    const regularFish = []

    for (const reg of fishCollection) {
        if(reg.length % 5 !== 0 && reg.length % 3 !== 0)
        regularFish.push(reg)
    }
    return regularFish;
}