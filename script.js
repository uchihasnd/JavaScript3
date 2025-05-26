import readline from "node:readline";
import { sortCoordinates } from "./sortCoordinates.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const coordinates = [];

//Functions to validate
const validateCoordinates = (lat, lon) => {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
};

const isNumber = (lat, lon) => {
  return !isNaN(lat) && !isNaN(lon);
};

//Functions to request the coordinates
const askCoordinates = (listNumber) => {
  rl.question(`\nEnter the latitude ${listNumber + 1}: `, (latitude) => {
    rl.question(`Enter the longitude ${listNumber + 1}: `, (longitude) => {
      if (isNumber(latitude, longitude)) {
        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);

        if (validateCoordinates(lat, lon)) {
          coordinates.push({lat, lon});

          if (coordinates.length < 5) {
            askCoordinates(coordinates.length);
          } else {
            const sorted = sortCoordinates(coordinates);
            console.log("\nCoordinates ordered by longitude:\n");
            sorted.forEach((coord, index) => {
              console.log(
                `${index + 1}. Latitude: ${coord.lat}, Longitude: ${coord.lon}`
              );
            });
            rl.close();
          }
        } else {
          console.error(`Invalid coordinates
Latitude must be between -90 and 90 and longitude between -180 and 180.\n`);
          askCoordinates(listNumber);
        }
      } else {
        console.error("Error: Latitude and longitude must be numbers.\n");
        askCoordinates(listNumber);
      }
    });
  });
};

askCoordinates(0);
