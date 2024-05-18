document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded with JavaScript');
    // llamo a la función que hace la llamada a la API
    callWeatherapi();
});

// funcion que hace la llamada a la API
async function callWeatherapi(){
    const apikey = 'bea8eeaa984c4109a21232242240605';
    const city = 'Santiago';
    try {
        // dentro de fetch va la url de la API
        // response es la respuesta de la API
        const currentday = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${apikey}`);   
        // data es la respuesta de la API en formato JSON
        const _currentday = await currentday.json();
        // devuelvo la respuesta de la API
        const nextDays = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=10&key=${apikey}`);
        const _nextDays = await nextDays.json();
        console.log('currentday: ', _currentday);
        console.log('nextDays: ', _nextDays);
        debugger;
        // insertNextDays(_nextDays);
        insertDataInNavbar(_currentday);
    } catch (error) {
        // acá van los errores
        throw error;
    }
};

function insertDataInNavbar(data){
    const location = data.location.name;
    const currenttemp = data.current.temp_c;
    const stringContent = `En ${location} la temperatura actual es de ${currenttemp}°C`;
    document.getElementById('contenidoApiNav').textContent = stringContent;
};

function insertNextDays(data){
    const forecast = data.forecast.forecastday;
    forecast.forEach(element => {
    });

}