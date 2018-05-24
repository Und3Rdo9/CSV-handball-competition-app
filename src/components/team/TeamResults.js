import React, { PropTypes } from 'react';
import Loader from 'react-loaders';
import { format } from 'date-fns';
import dutchLocale from 'date-fns/locale/nl';
import { CLUBCODE } from './../../constants';

const isOwnTeam = (id) => {
  return id === CLUBCODE;
};

const TeamResults = ({ results, loading }) => {
  if(loading > 0 ) {
    return (
      <Loader active color="#2041A3" />
    );
  }
  if(results.length && loading <= 0) {
    return (
      <div className="panel-list">
        {results.map( (match) =>
          <div className="panel" key={match.wedstrijdnummer}>
            <div className="panel__heading">{format(match.wedstrijddatum, 'dddd D MMMM YYYY', {locale: dutchLocale})}
            </div>
            <div className="panel__body">
              <div className="finished-match">
                <div className="finished-match__home-team" data-own-team={isOwnTeam(match.thuisteamclubrelatiecode
                )}>
                {match.thuisteam}
              </div>
              <div className="finished-match__result">
                {match.uitslag}
              </div>
              <div className="finished-match__away-team" data-own-team={isOwnTeam(match.uitteamclubrelatiecode
              )}>
              {match.uitteam}
            </div>
          </div>
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
