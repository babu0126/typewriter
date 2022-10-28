/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const fetchMyIP = function(callback) {
  const ipifyURL = 'https://api.ipify.org?format=json';
  request(ipifyURL, (error, response, body) => {
    if (error) {
      callback(`Error: ${error.message}`, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null)
      return;
    }
    let ipAddress = JSON.parse(body).ip;
    callback(null, ipAddress);

  });
};

const fetchCoordsByIP = (ip, callback) => {
  const ipwhoURL = `http://ipwho.is/${ip}`;
  request(ipwhoURL, (error, response, body) => {
    if (error) {
      callback(`Error: ${error.message}`, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null)
      return;
    }
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
    }
  )};

module.exports = { fetchMyIP, fetchCoordsByIP };