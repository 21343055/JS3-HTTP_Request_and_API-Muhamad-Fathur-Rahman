const request = require('postman-request')
const urlCuaca =
    'http://api.weatherstack.com/current?access_key=2a9dcfa66a3086e75850a6defeaece6b&query=-0.8971744832786848,100.35071164668217&units=s'
request({
    url: urlCuaca,
    json: true
}, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' +
        response.body.current.temperature +
        ' derajat celcius. Kemungkinan terjadinya hujan adalah' 
        + response.body.current.precip + '%')
})