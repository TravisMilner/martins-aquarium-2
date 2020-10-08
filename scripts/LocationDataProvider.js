const location = [
    {
        name: "Australia",
        person: "Cate Blanchett",
        temp: "hot"
    },
    {
        name: "America",
        person: "Kobe",
        temp: "all over"
    },
    {
        name: "Canada",
        person: "Ryan Reynolds",
        temp: "cold"
    }
]

export const useLocation = () => {
    return location.slice();
}