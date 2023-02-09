import { getEateries } from "./eateries/EateryProvider.js"
import { getParks } from "./parks/ParkProvider.js"
import { getBizarreries } from "./attractions/AttractionProvider.js"
import { setParkId, setEateryId, setBizarrerieId, getItinerary, FindPark, FindEatery, FindBizarrerie, sendItinerary, getSavedItineraries, resetItinerary } from "./dataAccess.js"
import { itinerary } from "./HolidayRoad.js"
import { popUpText, Weather } from "./weather/WeatherProvider.js"



document.addEventListener("change", (event) => {
    if (event.target.id === "parks") {
    const parkId = document.querySelector("select[name='parks']").value 
        setParkId(parkId)
        const eateryHTML = document.querySelector(".selectEatery")
        eateryHTML.innerHTML = selectEatery()
        const bizarrerieHTML = document.querySelector(".selectBizarrarie")
        bizarrerieHTML.innerHTML = selectBizarrarie()
      renderItineraryPreview()
      const park = FindPark(parkId)
      Weather(park.latitude, park.longitude).then(
        (data) => {
            popUpText(data)
        }
      )  
    }
})

document.addEventListener("change", (event) => {
    if (event.target.id === "eateries") {
    const eateryId = document.querySelector("select[name='eateries']").value 
        setEateryId(parseInt(eateryId))
        renderItineraryPreview()
    }
})
document.addEventListener("change", (event) => {
    if (event.target.id === "bizarreries") {
    const bizarrerieId = document.querySelector("select[name='bizarreries']").value 
    setBizarrerieId(parseInt(bizarrerieId))
    renderItineraryPreview()
    }
})

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "SavePreview") {
        let itinerary = getItinerary()
       
        sendItinerary(itinerary)
        resetItinerary()

    }
})
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "Details_park") {
        const itinerary = getItinerary()
        const park = FindPark(itinerary.nationalParkId)
        const parkHTML = `About ${park.fullName}--${park.description}\n \n Located at ${park.addresses[0].line1} ${park.addresses[0].city}, ${park.addresses[0].stateCode}\n \n How to get there: ${park.directionsInfo}`
        window.alert(parkHTML)

    }
})
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "Details_eatery") {
        let itinerary = getItinerary()
       const eatery = FindEatery(itinerary.eateryId)
       window.alert(` About ${eatery.businessName}--${eatery.description} \n \n Located in ${eatery.city}, ${eatery.state}`)
    }
})
document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "Details_bizarerrie") {
        let itinerary = getItinerary()
       const bizararrie = FindBizarrerie(itinerary.bizarrerieId)
       window.alert(`About the ${bizararrie.name}--${bizararrie.description} \n \n Located in ${bizararrie.city}, ${bizararrie.state}`)

    }
})
export const renderItineraryPreview = () => {
    const preview = document.querySelector(".itineraryPreview")
    preview.innerHTML = ItineraryPreview()
}

export const renderSavedItinerary = () => {
    const preview = document.querySelector(".savedItinerary")
    preview.innerHTML = savedItinerary()
}

export const savedItinerary = () => {
    const itineraries = getSavedItineraries()
    
    
    let html = `<ul>`
    
    itineraries.map((itinerary) => {
        
    const park = FindPark(itinerary.nationalParkId)
    const eatery = FindEatery(itinerary.eateryId)
    const bizarerrie = FindBizarrerie(itinerary.bizarrerieId)
        html += `<li>
            <h4>Itinerary ${itinerary.id}</h4>
             <p>${park.fullName}</p>
             <p> ${eatery.businessName}</p>
             <p> ${bizarerrie.name}</p>
             </li>`
    })



    html += `</ul>`
    return html
}




export const ItineraryPreview = () => {
    const itinerary = getItinerary()
    const park = FindPark(itinerary.nationalParkId)
    const eatery = FindEatery(itinerary.eateryId)
    const bizarerrie = FindBizarrerie(itinerary.bizarrerieId)
    let html =`<h2>Itinerary Preview<h2> `
   if (park){
    html += ` <div class = "previewItem"> ${park.fullName} 
    <button id="Details_park"> Details</button>
    <div class="parkDetails"></div>
    </div>`
   }
    if (eatery ) {
    html += `<div class = "previewItem"> ${eatery.businessName}
    <button id="Details_eatery"> Details</button>
    <div class="eateryDetails"></div>
    </div>`
   }
   if (bizarerrie) {
    html +=`<div class = "previewItem">${bizarerrie.name}
    <button id="Details_bizarerrie"> Details</button>
    <div class="bizarerrieDetails"></div>
    </div> `
   }
      if (park && eatery && bizarerrie) {
        html +=  `<button id = "SavePreview"> Save Itinerary</button>`
      }
       
       return html

}



export const itineraryForm = () => {
   return ` <div class = "itineraryForm">
   <div class="selectPark"> ${selectPark()}</div>
    <div class = "selectEatery"></div>
    <div class = "selectBizarrarie"></div>
    </div>`
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


export const selectBizarrarie = () => {
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