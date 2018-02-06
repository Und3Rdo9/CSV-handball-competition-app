import React, { PropTypes } from 'react';
import Loader from 'react-loaders';

const TeamRanking = ({ ranking, loading }) => {
  if(loading > 0 ) {
    const style = {
      backgroundColor: 'blue',
      margin: '0 auto',
      height: '100px'
    };
    return (
      <Loader active style={style} />
    );
  }
  if(ranking.length && loading <= 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th data-title="Positie"></th>
            <th data-title="Team">Team</th>
            <th data-title="Gespeeld">Gespeeld</th>
            <th data-title="Punten">Punten</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map( (team) =>
            <tr key={team.teamcode} className={(team.eigenteam === "true") ? 'info' : ''}>
              <td>{team.positie}</td>
              <td>{team.teamnaam}</td>
              <td>{team.gespeeldewedstrijden}</td>
              <td><strong>{team.punten}</strong></td>
            </tr>
          )}
        </tbody>

      </table>
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
