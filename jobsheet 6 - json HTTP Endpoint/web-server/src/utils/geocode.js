const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
    encodeURIComponent(address);

  request(
    {
      url: url,
      json: true,
      timeout: 7000,
      headers: {
        "User-Agent": "Aplikasi-Cuaca/1.0 (contact: brogh@student.ui.ac.id)",
      },
    },
    (error, response) => {
      if (error) {
        callback("Tidak dapat terhubung ke layanan geocoding.", undefined);
      } else if (!response.body || response.body.length === 0) {
        callback("Lokasi tidak ditemukan. Coba nama kota lain.", undefined);
      } else {
        const data = response.body[0];
        callback(undefined, {
          latitude: parseFloat(data.lat),
          longitude: parseFloat(data.lon),
          location: data.display_name,
        });
      }
    }
  );
};

module.exports = geocode;
