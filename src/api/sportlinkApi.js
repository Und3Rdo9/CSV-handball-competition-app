import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

const baseUrl = 'https://data.sportlink.com/';
const clientId = 'WuJeuY15Qe';
axios.defaults.adapter = httpAdapter;

class SportlinkApi {
  static getAllTeams() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${baseUrl}teams?teamsoort=bond&gebruiklokaleteamgegevens=NEE&client_id=${clientId}`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getSchedule(team) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${baseUrl}programma?teamcode=${team}&aantaldagen=365&client_id=${clientId}`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getGroupSchedule(groupId) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${baseUrl}poule-programma?poulecode=${groupId}&aantaldagen=365&gebruiklokaleteamgegevens=NEE&client_id=${clientId}`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getGroupResults(groupId) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${baseUrl}pouleuitslagen?aantaldagen=365&weekoffset=-52&poulecode=${groupId}&eigenwedstrijden=NEE&gebruiklokaleteamgegevens=NEE&client_id=${clientId}&sorteervolgorde=datum-omgekeerd`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getGroupRanking(groupId) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${baseUrl}poulestand?poulecode=${groupId}&gebruiklokaleteamgegevens=NEE&client_id=${clientId}`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getResults(team) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${baseUrl}uitslagen?teamcode=${team}&weekoffset=-30&aantaldagen=365&gebruiklokaleteamgegevens=NEE&thuis=JA&uit=JA&client_id=${clientId}`
        )
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default SportlinkApi;
