import { useFish } from "./FishDataProvider.js"
import { FishList} from "./FishList.js"
import { useTips } from "./TipsDataProvider.js"
import { TipList } from "./TipList.js"
const allTheFish = useFish()
const allTheTips = useTips()

for (const fish of allTheFish) {
    console.log(fish)
}
for (const tips of allTheTips) {
    console.log(tips);
}



FishList();
useTips();
TipList();
