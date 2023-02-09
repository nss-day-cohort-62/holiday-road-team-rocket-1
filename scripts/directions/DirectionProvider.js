export const Geocoding = (city) => {
    return fetch(`https://graphhopper.com/api/1/geocode?q=${city}&key=7eec464a-0db4-49e0-bba6-6bc40c2b72b6`)
    .then(response => response.json())
}

export const Directions = (parkLat, parkLon, eateryLat, eateryLon, bizarerrieLat, bizarerrieLon) => {
    return fetch(`https://graphhopper.com/api/1/route?point=36.1627,-86.7816&point=${bizarerrieLat},${bizarerrieLon}&point=${eateryLat},${eateryLon}&point=${parkLat},${parkLon}&profile=car&locale=en&instructions=true&key=7eec464a-0db4-49e0-bba6-6bc40c2b72b6`)
    .then(response => response.json())
    }

export const Instructions = (instructionsObject) => {
    const instructionsArray = instructionsObject.paths[0].instructions 
    let html = '<ol>'
    instructionsArray.map((instruction) => {
        return html += `<li>${instruction.text}</li>`
    })
    html += '</ol>'
    return html
}