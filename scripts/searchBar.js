export const searchParks = (inquiry) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=1pax9zKhWlQ9j4gQqWOa6AwQWcz8GqtEmYD88nxo&limit=50&q=${inquiry}`)
        .then(response => response.json())
}

export const searchEateries = (inquiry) => {
    return fetch(`http://holidayroad.nss.team/eateries?businessName_like=${inquiry}`)
        .then(response => response.json())
}

export const searchBizarreries = (inquiry) => {
    return fetch(`http://holidayroad.nss.team/bizarreries?name_like=${inquiry}`)
        .then(response => response.json())
}
export const searchEvents = (inquiry) => {
    return fetch(`https://developer.nps.gov/api/v1/events?api_key=1pax9zKhWlQ9j4gQqWOa6AwQWcz8GqtEmYD88nxo&pageSize=756&q=${inquiry}`)
        .then(response => response.json())
}




export const searchAll = (inquiry) => {
    let searchPromises = []
   
    searchPromises.push(searchParks(inquiry))
    searchPromises.push(searchEateries(inquiry))
    searchPromises.push(searchBizarreries(inquiry))
    searchPromises.push(searchEvents(inquiry))

    
    return Promise.all(searchPromises).then(
        (searchResults) => {
            return (searchResults)
        })
}

//this returns the array of search results divided by the search functions....






export const searchToHTML = (searchResults) => {

}