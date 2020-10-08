import { useFish } from "./FishDataProvider.js"
import { FishList} from "./FishList.js"
import { useTips} from "./TipsDataProvider.js"
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}




FishList();
useTips();

const allTheTips = useTips();

for (const tip of allTheTips) {
    console.log(tip);
}