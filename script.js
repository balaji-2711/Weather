//to fetch the api using async and await
let countries = async () => {
  try {
    //to get the parent element to display the contents
    let country_list = document.getElementById("main");
    country_list.innerHTML = "<h4>Loading Please Wait.....</h4>";

    let api = "https://restcountries.com/v3.1/all";

    let res = fetch(api, {
      method: "GET",
    });
    let data = (await res).json();
    let details = await data;

    country_list.innerHTML = "";

    //to get details of all the country
    for (let i = 0; i < details.length; i++) {
      let flag = details[i].flags.svg;

      let name = details[i].name.common;

      let region = details[i].region;

      let population = details[i].population;

      let capital = details[i].capital;

      let lat = details[i].latlng[0];

      let lon = details[i].latlng[1];

      country_list.innerHTML += `<div class="card m-2" style="width:20rem; height:35em; border:2px solid black">
     <img src="${flag}" class="card-img-top " style=" height:10em;" alt="">
     <div class="card-body" style="height:20em;">
     <h5 class="card-title" ><b>Name : ${name}</b></h5>
     <p class="card-text-region"><b>Region</b> :${region}</p>
     <p class="card-text-region"><b>Capital</b>:${capital}</p>
     <p class="card-text"><b>Population </b>:${population}</p>
     <div id="${details[i].name.common}"</div>
     </div>
     <div class="class-footer d-flex justify-content-center" id="search_weather" >
     <button type="button" class="btn btn-primary" id="search" onclick="weather_data(${lat},${lon},'${details[i].name.common}')">Click for weather</button>
    </div>
     </div>`;
    }
  } catch (err) {
    console.log(err);
  }
};

//to fetch the weather
let weather_data = async function (lat, lon, id) {
  try {
    //to get the country name as id
    let weather_info = document.getElementById(id);

    weather_info.innerHTML = "loading....";

    let weather_api_key = "da7c563e38dca417f0a5fc891eb52b49";
    let api1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`;
    let res1 = await fetch(api1, {
      method: "GET",
    });
    let data1 = await res1.json();
    let temp = data1.main.temp;
    let humidity = data1.main.humidity;

    weather_info.innerHTML = `
    <p class="card-text"><b>Temperature :</b>${temp}</p>
    <p class="card-text"><b>Humidity :</b>${humidity}</p>`;
  } catch (err) {
    console.log(err);
  }
};
//calling the function
countries();
