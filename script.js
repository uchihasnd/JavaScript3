import readline from "node:readline";
import { sortCoordinates } from "./sortCoordinates.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const totalCoordinates = 5;
const coordinates = [];

//Function to validate the range of the coordinates
const validateCoordinatesRange = (lat, lon) => {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
};

//Function to validate that latitude and longitude are numbers
const isNumber = (lat, lon) => {
  return !isNaN(lat) && !isNaN(lon);
};

//Function to convert latitude and longitude to numbers and return it as an object
const parseCoordinates = (latitude, longitude) => {
  return {
    lat: parseFloat(latitude),
    lon: parseFloat(longitude),
  };
};

//Error messages
const showNumberError = () => {
  console.error("Error: Latitude and longitude must be numbers.\n");
};

const showRangeError = () => {
  console.error(`Invalid coordinates.
Latitude must be between -90 and 90 and longitude between -180 and 180.\n`);
};

//Handles the inputs, adds the coordinates to the array and calls the sortArrayCordinates function to sort them
const handleCoordinateInput = (latitude, longitude, listNumber) => {
  if (!isNumber(latitude, longitude)) {
    showNumberError();
    return askCoordinates(listNumber);
  }
  //Object destructuring
  const { lat, lon } = parseCoordinates(latitude, longitude);

  if (!validateCoordinatesRange(lat, lon)) {
    showRangeError();
    return askCoordinates(listNumber);
  }

  coordinates.push({ lat, lon });

  if (coordinates.length < totalCoordinates) {
    askCoordinates(coordinates.length);
  } else {
    sortArrayCoordinates();
  }
};

//Function to request the coordinates
const askCoordinates = (listNumber) => {
  rl.question(`\nEnter the latitude ${listNumber + 1}: `, (latitude) => {
    rl.question(`Enter the longitude ${listNumber + 1}: `, (longitude) => {
      handleCoordinateInput(latitude, longitude, listNumber);
    });
  });
};

//Function to sort the coordinates in the coordinates array and display it in the console
const sortArrayCoordinates = () => {
  const sorted = sortCoordinates(coordinates);
  console.log("\nCoordinates ordered by longitude:\n");
  sorted.forEach((coord, index) => {
    console.log(
      `${index + 1}. Latitude: ${coord.lat}, Longitude: ${coord.lon}`
    );
  });
  rl.close();
};

askCoordinates(0);
