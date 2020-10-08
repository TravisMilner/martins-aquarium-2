const tipCollection = [
    {
        name: "Water Temp",
        detail: "Hot"

    },
    {
        name: "Diet",
        detail: "Feed all The Time"
    },
    {
        name: "Fitness",
        detail: "Swim A Lot"
    },
];

export const useTips = () => {
    return tipCollection.slice()
}