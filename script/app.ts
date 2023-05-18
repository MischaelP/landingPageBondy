console.log("Hello world")
const intro = document.querySelector("#intro") as HTMLBodyElement

intro.innerHTML = `<p>Hello world</p>`

async function weatherBondy(){
    const url : string = "https://jsonplaceholder.typicode.com/todos/1"
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(response)

    }
    catch (error){
        console.error("Connection API impossible")
    }
    
}

console.log(weatherBondy())