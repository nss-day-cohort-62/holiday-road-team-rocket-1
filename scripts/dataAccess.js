import { getBizarreries } from "./attractions/AttractionProvider.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"

const API = "http://localhost:8088"

export const applicationState = {
 itinerary: {
    nationalParkId: 0,
    bizarrerieId: 0,
    eateryId: 0
},
savedItineraries: []
}

export const getItinerary = () => {
    return applicationState.itinerary
}


export const setParkId = (id) => {
    applicationState.itinerary.nationalParkId = id
}
export const setEateryId = (id) => {
    applicationState.itinerary.eateryId = id
}
export const setBizarrerieId = (id) => {
    applicationState.itinerary.bizarrerieId = id
}
export const FindPark = (id) => {
    const parks = getParks()
    const foundPark = parks.find(
        (park) => {
            return park.id === id
        }
    )
    return foundPark
}
export const FindEatery = (id) => {
    const eateries = getEateries()
    const foundEatery = eateries.find(
        (eatery) => {
            return eatery.id === id
        }
    )
    return foundEatery
}
export const FindBizarrerie = (id) => {
    const bizarreries = getBizarreries()
    const foundBizarrerie = bizarreries.find(
        (bizarrerie) => {
            return bizarrerie.id === id
        }
    )
    return foundBizarrerie
}

export const sendItinerary = (itinerary) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    }
    return fetch(`${API}/savedItineraries`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const getSavedItineraries = () => {
    return applicationState.savedItineraries.map(savedItinerary => ({...savedItinerary}))
}
export const fetchItineraries = () => {
    return fetch(`${API}/savedItineraries`) 
        .then(response => response.json())
        .then((itinerariesFetched) => {
            applicationState.savedItineraries = itinerariesFetched
            console.log(applicationState.savedItineraries)
        }
    )
}