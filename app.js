const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');
//lugar.getLugarLatLng(argv.direccion).then(console.log);


const getInfo = async(direccion) => {
    let datos = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(datos.lat, datos.lng);
    return `El clima en ${direccion} es de ${temp}º`;

}

console.log(getInfo(argv.direccion).then(console.log)
    .catch(console.log));