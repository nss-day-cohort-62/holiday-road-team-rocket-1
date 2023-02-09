
export const Weather = (lat, lon) => {
return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=55612027b5e7e215367451a9c745f79a&units=imperial`)
.then(response => response.json())
}
//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

// export const fetchWeather = () => {
//     return fetch(`${weatherKey}`) 
//         .then(response => response.json())
//         .then((weatherFetched) => {
//             weatherState = weatherFetched
//             console.log(weatherFetched)
//         }
//     )
// }
export const popUpText = (weatherBox) => {
    let html = `<div id="overlay">
    <div id="popup">
    <button id="popupclose">X</button>
    <div class="popupcontent">
        <h3>The temperature is ${weatherBox.main.temp}</h3>
        <h3>It feels like ${weatherBox.main.feels_like}</h3>
        <h3>The humidity is ${weatherBox.main.humidity}</h3>
    </div>
</div>
</div>
`
const popUp = document.querySelector("#popUpGoHere")
    popUp.innerHTML = html

}
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "popupclose") {
        // const mainContainer = document.querySelector("#container")
        // mainContainer.innerHTML = TruncheonsAndFlagons()
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
 
    // Close Popup Event
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }
})