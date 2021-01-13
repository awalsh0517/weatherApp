window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationTimezone = document.querySelector('.location-timezone')
  let locationIcon = document.querySelector('.weather-icon')

  let temperatureSection = document.querySelector('.temperature')
  const temperatureSpan = document.querySelector('.temperature span')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = `http://cors-anywhere.herokuapp.com/`;
      const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=1040d1c20eb508d019357fa863ff80ee`;


      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);

          const { temp } = data.main
          temperatureDegree.textContent = temp

          const { description, icon } = data.weather[0]
          temperatureDescription.textContent = description
          locationIcon.innerHTML = `<img src="icons/${icon}.png">`

          locationTimezone.textContent = data.name

          // formula for celsius
          let celsius = (temp - 32) * (5 / 9)

          // change temp to cel/fer
          temperatureSection.addEventListener('click', () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C"
              temperatureDegree.textContent = Math.floor(celsius)
            } else {
              temperatureSpan.textContent = "F"
              temperatureDegree.textContent = Math.floor(temp)
            }
          })

        })
    })
  }


  // function setIcons(icon, iconId)
  // const skyscons = new skyscons({ color: "white" })


  // else {
  //   h1.textContent = "This could not load please enable location services"
  // }
})