const apiKey="a3f586b4802e937caa58af08b3856cd8";

fetchWeather("Chennai")

document.querySelector(".search-button").addEventListener("click",function(){
cityName= document.querySelector(".search-box").value;
//    console.log(cityName);
fetchWeather(cityName)
})


function fetchWeather(city){
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(response=>response.json()).then(data=>{
            // console.log(data)

            //extracting information from api 
            const{temp}=data.main;
            const icon=data.weather[0].icon
            // console.log(icon)
            const description=data.weather[0].description;
            // console.log(description)
            const{humidity}=data.main;
            // console.log(humidity)
            const{speed}=data.wind;
            // console.log(speed)
            const{name}=data
            // console.log(name)
            const{feels_like}=data.main;
            // console.log(feels_like)


            const{sunrise}=data.sys;
            // console.log(sunrise)
            const{sunset}=data.sys;
            // console.log(sunset)
            var date1 = new Date(sunrise * 1000);
            var sunriseTime = date1.toLocaleTimeString();
            // console.log(sunriseTime);
            var date2 = new Date(sunset * 1000);
            var sunsetTime = date2.toLocaleTimeString();
            // console.log(sunsetTime);
            



            // changing weather 
            
            document.querySelector("#city-name").innerText=`Weather in ${name}`;
            document.querySelector("#temperature").innerText=`${temp} °C`;
            document.querySelector("#weather-description").innerText=`${description}`;
            document.querySelector("#humidity").innerText=`Humidity : ${humidity} %`;
            document.querySelector("#wind-speed").innerText=`Wind speed : ${speed} km/hr`;
            document.querySelector("#feels-like").innerText=`Feels like : ${feels_like} °C`
            document.querySelector("#icon").src=`http://openweathermap.org/img/wn/${icon}.png`;
            document.querySelector("#sunrise").innerText=`Sunrise : ${sunriseTime}`;
            document.querySelector("#sunset").innerText=`Sunset : ${sunsetTime}`;

            document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+name+"')";
            


        })
        

        
    }