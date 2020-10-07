console.log("Welcome to the main module")
import { useFish} from `./FishDataProvider.js`
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}