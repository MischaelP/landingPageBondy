var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function convertToCelcius(tmp) {
    const kelvin = 273;
    const resultat = Math.floor(tmp - kelvin);
    return resultat;
}
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "https://api.openweathermap.org/data/2.5/weather?q=Bondy&lang=fr&appid=02b4c674fdd7aef00058e1322c2cc9c3";
            const response = yield fetch(url);
            const data = yield response.json();
            console.table(data);
            const tmpC = convertToCelcius(data.main.temp);
            const maxDay = convertToCelcius(data.main.temp_max);
            const minDay = convertToCelcius(data.main.temp_min);
            console.log(tmpC);
            console.log(maxDay);
            console.log(minDay);
        }
        catch (error) {
            console.error("Impossible de se connecter à la base de donnés");
        }
        //Convertion température en Celcius
    });
}
getWeather();
