
import { itineraryForm, savedItinerary } from "./Itinerary.js"

export const itinerary = {
    nationalParkid: 0,
    bizarrarieId: 0,
    eateryId: 0
}







export const HolidayRoad = () => {
    return `
    

        ${itineraryForm()}
    <div class = "itineraryPreviewBox">
   
        <h1> Holiday Road</h1>
        <div class="itineraryPreview"></div>

    </div>

    <div class = "savedItinerary">${savedItinerary()}</div>`
    
}


