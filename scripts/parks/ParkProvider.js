const Parks = 'https://developer.nps.gov/api/v1/parks?api_key=1pax9zKhWlQ9j4gQqWOa6AwQWcz8GqtEmYD88nxo&limit=50'

let parksState = {}

export const fetchParks = () => {
    return fetch(`${Parks}`) 
        .then(response => response.json())
        .then((parksFetched) => {
            parksState = parksFetched
            console.log(parksState)
        }
    )
}

export const getParks = () => {
    return parksState.data.map(park => ({...park}))
}   