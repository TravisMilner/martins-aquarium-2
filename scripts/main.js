import { useFish } from "./FishDataProvider.js"
import { FishList} from "./FishList.js"
import { useTips } from "./TipsDataProvider.js"
import { TipList } from "./TipList.js"
import { useLocation } from "./LocationDataProvider.js"
import { LocationList} from "./LocationList.js"

const allTheLocations = useLocation()
const allTheFish = useFish()
const allTheTips = useTips()

for (const fish of allTheFish) {
    console.log(fish)
}
for (const tips of allTheTips) {
    console.log(tips);
}

for (const location of allTheLocations) {
    console.log(location)
}

FishList();
useTips();
TipList();
useLocation();
LocationList()