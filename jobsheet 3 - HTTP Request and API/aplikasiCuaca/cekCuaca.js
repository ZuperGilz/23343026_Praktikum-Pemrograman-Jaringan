const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=e2419709f064ad9d19f80a17ae7f935d&query=-0.8970762138053057,100.35080799717822&units=f'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu di luar mencapai ' + response.body.current.temperature +
        '°f. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')
})
