 /*

    #forecast-cards

    <div class="forecast-display">
        <h3>5-Day Forecast:</h3>
        <div class="forecast-cards">
            <div class="forecast-card flex-col">
                <h4>3/3/2021</h4>
                <p>⛅</p>
                <p>Temp: 72.76 °F</p>
                <p>Wind: 2000 MPH</p>
                <p>Humidity: 78%</p>
            </div>
        </div>
    </div>
 
 */

// Global Variables
let searchFormEl = document.querySelector("#search-form");

// City List Element Variables and Attributes
let cityListEl = document.createElement("div");
cityListEl.className = "city-list flex-col";
cityListEl.id = "city-list";
// Buttons
let cityListBtnEl = document.createElement("button");
cityListBtnEl.className = "city-btn";

// City Info Element Variables and Attributes
let cityInfoEl = document.createElement("div");
cityInfoEl.className = "city-info flex-col";
cityInfoEl.id = "city-info";
// Headline
let cityInfoHeadlineEl = document.createElement("h2");

// Main Section Element Variables and Attributes
let mainSectionEl = document.querySelector(".main-section");
let forecastDisplayEl = document.createElement("div");
forecastDisplayEl.className = "forecast-display";
// Headline
let forecastHealineEl = document.createElement("h3");
forecastHealineEl.textContent = "5-Day Forecast:";
// Cards
let forecastCardsEl = document.createElement("div");
forecastCardsEl.className = "forecast-cards";
let forecastCardEl = document.createElement("div");
forecastCardsEl.className = "forecast-card flex-col";

// Get City Weather

let getCityWeather = function() {

};

// City Search Event Handler

let getCityEventHandler = function(event) {
    event.preventDefault();
};

// Existing City Event Handler

let getExistingCityHandler = function(event) {

};

// Event Listeners
searchFormEl.addEventListener("submit", getCityEventHandler);
cityListBtnEl.addEventListener("click", getExistingCityHandler);