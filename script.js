import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validateCoordinates(lat, lon) {
  if ((lat >= -90 && lat <= 90) && (lon >= -180 && lon <= 180)) {
    return true;
  }
  return false;
}



rl.question(`Enter the latitude: `, latitude => {
  rl.question(`Enter the longitude: `, longitude => {
    const lat = latitude;
    const lon = longitude;

    if (validateCoordinates(lat, lon)) {
      console.log(`Valid coordinates. (Latitude: ${lat}, Longitude: ${lon})`);
    } else {
      console.log('Invalid coordinates. Latitude must be between -90 and 90 and longitude between -180 and 180.');
    }
  rl.close();
  });
});