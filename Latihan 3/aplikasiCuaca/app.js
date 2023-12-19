const request = require('postman-request')

const url =
    'http://api.weatherstack.com/current?access_key=2a9dcfa66a3086e75850a6defeaece6b&query=-0.8971744832786848,100.35071164668217'
// request({url: url}, (error, response) => {
// // console.log(response)
// const data = JSON.parse(response.body)
// // console.log(data)
// // console.log(data.current)
// console.log(data.current.temperature)
// })

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       console.error('Error:', error);
//     } else if (response.body.error) {
//       console.error('Weatherstack API Error:', response.body.error.info);
//     } else {
//       console.log('Saat ini cuacanya ' +
//         response.body.current.weather_descriptions.join(', ') + '. ' +
//         'Suhu saat ini mencapai ' +
//         response.body.current.temperature +
//         ' derajat Celsius. Kemungkinan terjadinya hujan adalah ' +
//         response.body.current.precip +
//         '%');
//     }
//   });
  

const geocodeURL =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/Jakarta.json?access_token=pk.eyJ1IjoicGF0b3QiLCJhIjoiY2xtaWx0dGF5Mmt1cTNwcGN5c2E0bW04ayJ9.a89ql3viG7lbdsfWN0qA3g&limit = 1 '
request({url: geocodeURL, json: true}, (error,  response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})