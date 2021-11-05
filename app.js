
    const api = "https://api.openweathermap.org/data/2.5/weather?q=fulton,IL,US&appid=";

    fetch(api).then(response => {return response.json();
    })
    .then(data => {
        const {temp, description} = data;
        intTemp.textContent = Math.floor((data.main.temp -273.15) * 9/5 + 32);
        intDescr.textContent = data.weather[1];
    });



let intTemp = document.querySelector('.deg');
let intZone = document.querySelector('.location-timezone');
let intDescr = document.querySelector('.tempDescription');

