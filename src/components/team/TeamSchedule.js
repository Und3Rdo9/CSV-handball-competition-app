import React, { PropTypes } from 'react';
import Loader from 'react-loaders';


const TeamSchedule = ({ schedule, loading }) => {
  if(loading > 0 ) {
    return (
      <Loader active />
    );
  }
  if(schedule.length && loading <= 0) {
    return (
      <div>
        {schedule.map( (match) =>
          <div className="panel panel-info" key={match.wedstrijdnummer}>
            <div className="panel-heading">{match.datum}</div>
            <div className="panel-body">
              <p>{match.wedstrijd}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  else {
    return (
      <p>Geen programma gevonden.</p>
    );
  }


};

TeamSchedule.propTypes = {
  schedule: PropTypes.array.isRequired,
  loading: PropTypes.number.isRequired
};

export default TeamSchedule;
