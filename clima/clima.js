const axios = require('axios');

const getClima = async(lat, lng) => {
    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b098cfe376892050327202b254626f23&units=metric`);
        return resp.data.main.temp;
    } catch (error) {

    }

}

module.exports = {
    getClima
}