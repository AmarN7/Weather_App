async function fetchweatherData (cityName){ 
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7b3734957f6423ba0121990597d62d3b`
   const response = await fetch (url)
   const data = await response.json();
   console.log(data.name)

}

function fetchcity(){ 
    let cityName = document.getElementById("city_name");
    if(cityName.value===""){ 

         alert("Enter a city name");
     }
     else{
         fetchweatherData(cityName.value);
         cityName.value=""
      }

    }

