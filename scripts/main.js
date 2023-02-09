import { fetchBizarreries } from "./attractions/AttractionProvider.js";
import { fetchItineraries } from "./dataAccess.js";
import { fetchEateries } from "./eateries/EateryProvider.js";
import { HolidayRoad } from "./HolidayRoad.js";
import { fetchParks } from "./parks/ParkProvider.js";

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchParks()
    .then(
        () => fetchEateries()
    )
    .then(
        () => fetchBizarreries()
    )
    .then(
        () => fetchItineraries()
    )
    .then(
        () => {
            mainContainer.innerHTML = HolidayRoad()
        }
    )
}
render ()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)