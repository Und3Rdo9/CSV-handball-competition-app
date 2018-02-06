import React, { PropTypes } from 'react';
import Loader from 'react-loaders';

const TeamResults = ({ results, loading }) => {
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
  if(results.length && loading <= 0) {
    return (
      <div>
        {results.map( (match) =>
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
      <p>Geen uitslagen gevonden.</p>
    );
  }


};

TeamResults.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.number.isRequired
};

export default TeamResults;
