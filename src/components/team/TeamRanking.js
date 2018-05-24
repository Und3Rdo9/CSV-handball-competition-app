import React, { PropTypes } from 'react';
import Loader from 'react-loaders';

const TeamRanking = ({ ranking, loading }) => {
  if(loading > 0 ) {
    return (
      <Loader active color="#2041A3" />
    );
  }
  if(ranking.length && loading <= 0) {
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Team</th>
              <th>Gespeeld</th>
              <th>Punten</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map( (team) =>
              <tr key={team.clubrelatiecode} className={(team.eigenteam === "true") ? 'highlight' : ''}>
                <td data-title="Positie">{team.positie}</td>
                <td data-title="Team">{team.teamnaam}</td>
                <td data-title="Gespeeld">{team.gespeeldewedstrijden}</td>
                <td data-title="Punten"><strong>{team.punten}</strong></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  else {
    return (
      <p>Geen stand gevonden.</p>
    );
  }


};

TeamRanking.propTypes = {
  ranking: PropTypes.array.isRequired,
  loading: PropTypes.number.isRequired
};

export default TeamRanking;
