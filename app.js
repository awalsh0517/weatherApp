window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={1040d1c20eb508d019357fa863ff80ee
      }`


      fetch(api)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data)
        })
    })
  }
  // else {
  //   h1.textContent = "This could not load please enable location services"
  // }
})