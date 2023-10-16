let cityName = document.getElementById("cityName");
let button = document.getElementById("go");
let city = document.getElementById("name");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");
button.addEventListener("click",(e)=>{
    weather(cityName.value);
})
function weather(cityName){
    console.log(cityName);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8bcd81337fcf930c20193f86b769a035`)
    .then((res)=>res.json())
    .then((data)=>createCards(data))
    .catch((err)=>alert("check city name"));  
}
function createCards(data){
    city.innerText = data.name;
    desc.innerText = data.weather[0].description;
    temp.innerText = data.main.temp;
}



