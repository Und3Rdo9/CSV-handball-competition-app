import axios from 'axios';

const baseUrl = 'https://data.sportlink.com/';
const clientId =  '';

class SportlinkApi {

  static getAllTeams() {
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}teams?teamsoort=bond&gebruiklokaleteamgegevens=NEE&client_id=${clientId}`)
        .then( response  => {
          resolve(response);
        })
        .catch( error => {
          reject(error);
        });
    });
  }

  static getSchedule(team) {
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}programma?teamcode=${team}&aantaldagen=365&client_id=${clientId}`)
        .then( response  => {
          debugger;
          resolve(response);
        })
        .catch( error => {
          reject(error);
        });
    });
  }
}

export default SportlinkApi;
