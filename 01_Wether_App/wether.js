
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// This is Wether Map Api Url

const apiKey = "700190725ef3d559d60d9e3bac8e21fa" 
//This is Key of Url

const serchbox = document.querySelector(".serch input"); //This get input data from user
// var autocomplete = new google.maps.places.Autocomplete(serchbox); 
const serchbtn = document.querySelector(".serch button"); //This get the Serch box click event 

const wethericon = document.querySelector(".wether-icon");

serchbtn.addEventListener("click", ()=>{ //Click event Function
    checkwether(serchbox.value); 
    //When Click eveny lisen calls function with pass City name to function
 })

 //Above Function loads api and fetch wether Info using api 
async function checkwether(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 

    if(response.status == 404){

        alert("Invalid City Name");
        window.location.reload(); // after alert this relode the page

    }else{

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".Wind").innerHTML = Math.round(data.wind.speed) + "km/hr";

        if(data.weather[0].main == "Clouds"){
            wethericon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            wethericon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            wethericon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            wethericon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            wethericon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            wethericon.src = "images/snow.png"
        }

        document.querySelector(".weather").style.display = "block";
        
    }
    
}
