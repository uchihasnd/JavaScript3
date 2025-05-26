export function sortCoordinates(coordinates) {
  return coordinates.sort((a, b) => a.lon - b.lon);
}
