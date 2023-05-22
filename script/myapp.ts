//QuerySelectors
const meteo:HTMLElement = document.querySelector("#meteo")!;


function convertToCelcius(tmp:number):number {
    const kelvin:number = 273
    const resultat:number = Math.floor(tmp - kelvin)

    return resultat
}

function afficheMeteo(tmpCurrent:number, minDay:number, maxDay:number): void{
    meteo.innerHTML = `<p>Mininales Bondy : ${minDay}</p><br><p>Maximales Bondy : ${maxDay}</p><br><p>Actuelle : ${tmpCurrent}</p>`
    
}

async function getWeather(): Promise<void>{
    try {
        const url:string = "https://api.openweathermap.org/data/2.5/weather?q=Bondy&lang=fr&appid=02b4c674fdd7aef00058e1322c2cc9c3";

        const response = await fetch(url)
        const data = await response.json()
        console.table(data)
        const tmpCurrent:number = convertToCelcius(data.main.temp)
        const maxDay:number = convertToCelcius(data.main.temp_max)
        const minDay:number = convertToCelcius(data.main.temp_min)
        console.log(tmpCurrent)
        console.log(maxDay)
        console.log(minDay)
        afficheMeteo(tmpCurrent,minDay,maxDay)
    }
    catch (error){
        console.error("Impossible de se connecter à la base de donnés")
    }

    //Affiche méteo


}
getWeather();

