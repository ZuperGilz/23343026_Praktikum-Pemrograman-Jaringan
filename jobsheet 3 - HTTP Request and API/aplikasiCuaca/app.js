// const request = require('postman-request')
// const url = 'http://api.weatherstack.com/current?access_key=e2419709f064ad9d19f80a17ae7f935d&query=-0.8970762138053057,100.35080799717822'
// request({ url: url }, (error, response) => {
//     // console.log(response)
//     const data = JSON.parse(response.body)
//     console.log(data)
//     // console.log(data.current)
//     console.log(data.current.temperature)
// })

const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=e2419709f064ad9d19f80a17ae7f935d&query=-0.8970762138053057,100.35080799717822'
request(
    {url},
    (err, res) => {
        if (err)
            return console.log('Gagal mendapatkan data cuaca.');

        const { request, location } = JSON.parse(res.body);
        const query = request.query;
        const place_name = `${location.name}, ${location.region}, ${location.country}`;
        const place_type = request.type;
        
        console.log(`data yang anda cari adalah: ${query}`)
        console.log(`data yang ditemukan adalah: ${place_name}`)
        console.log(`tipe lokasi adalah: ${place_type}`)
    }
);
