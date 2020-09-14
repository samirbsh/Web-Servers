const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  //const url = "http://api.weatherstack.com/current?access_key=c86b952bd99f8e889997f77aaf4d27fe&%20query=37.8267,-122.4233"
  const url = `http://api.weatherstack.com/current?access_key=c86b952bd99f8e889997f77aaf4d27fe&%20query=${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service !!", undefined);
    } else if (body.error) {
      callback("Unable to find Weather !!", undefined);
    } else {
      callback(
        undefined,
        "Condition is " +
          body.current.weather_descriptions[0] +
          ". And it is " +
          body.current.temperature +
          " " +
          "and feels like " +
          body.current.feelslike +
          " in " +
          body.location.name +
          ", " +
          body.location.region +
          " ," +
          body.location.country
      );
    }
  });
};

module.exports = forecast;
