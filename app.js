
    const api = "https://api.openweathermap.org/data/2.5/weather?q=fulton,IL,US&appid=";

    fetch(api).then(response => {return response.json();
    })
    .then(data => {
        const {temp, description} = data;
        let weatherDescr = data.weather[0].description;
        intTemp.textContent = Math.floor((data.main.temp -273.15) * 9/5 + 32);
        intDescr.textContent = weatherDescr.charAt(0).toUpperCase() + weatherDescr.slice(1).toLowerCase() + " at Frank's House";
    });



let intTemp = document.querySelector('.deg');
let intZone = document.querySelector('.location-timezone');
let intDescr = document.querySelector('.tempDescription');

