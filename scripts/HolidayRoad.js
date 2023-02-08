import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"
import { getBizarreries } from "./attractions/AttractionProvider.js"

export const itinerary = {
    nationalParkid: 0,
    bizarrarieId: 0,
    eateryId: 0
}

export const HolidayRoad = () => {
    return `${selectPark()} ${selectEatery()} ${selectBizarraries()}`
}

export const selectPark = () => {
    const parks = getParks()

    let html = `        
        <select class="teams" name = "parks" id="parks">
            <option value="0">Choose a park</option>
            ${parks.map(park => {
                return `<option value="${park.id}" >${park.fullName}</option>`
            }).join("")}
        </select>
`
    return html
}

export const selectEatery = () => {
    const eateries = getEateries()

    let html = `        
        <select class="teams" name = "eateries" id="eateries">
            <option value="0">Choose a eatery</option>
            ${eateries.map(eatery => {
                return `<option value="${eatery.id}" >${eatery.businessName}</option>`
            }).join("")}
        </select>
`
    return html
}

export const selectBizarraries = () => {
    const bizarreries = getBizarreries()

    let html = `        
        <select class="teams" name = "bizarreries" id="bizarreries">
            <option value="0">Choose a bizararrie</option>
            ${bizarreries.map(bizararrie => {
                return `<option value="${bizararrie.id}" >${bizararrie.name}</option>`
            }).join("")}
        </select>
`
    return html
}