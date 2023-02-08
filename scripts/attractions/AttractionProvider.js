const Bizarreries = 'http://holidayroad.nss.team/bizarreries'

let bizarreriesState = {}

export const fetchBizarreries = () => {
    return fetch(`${Bizarreries}`) 
        .then(response => response.json())
        .then((bizarreriesFetched) => {
            bizarreriesState = bizarreriesFetched
            console.log(bizarreriesState)
        }
    )
}

export const getBizarreries = () => {
    return bizarreriesState.map(bizarrerie => ({...bizarrerie}))
}   