import React, { PropTypes } from 'react';
import Loader from 'react-loaders';
import { format } from 'date-fns';
import dutchLocale from 'date-fns/locale/nl';

const TeamSchedule = ({ schedule, loading }) => {
  if(loading > 0 ) {
    return (
      <Loader active color="#2041A3" />
    );
  }
  if(schedule.length && loading <= 0) {
    return (
      <div>
        {schedule.map( (match) =>
          <div className="panel" key={match.wedstrijdnummer}>
            <div className="panel__heading">{format(match.wedstrijddatum, 'dddd D MMMM YYYY', {locale: dutchLocale})}</div>
            <div className="panel__body">
              <div className="scheduled-match">
                <p className="scheduled-match__time">{format(match.wedstrijddatum, 'HH:mm', {locale: dutchLocale})}</p>
                <p className="scheduled-match__name">{match.wedstrijd}</p>
                <div className="scheduled-match__location">
                  <span className="scheduled-match__accommodation">
                    {match.accommodatie}
                  </span>
                  <span className="scheduled-match__city">
                    {match.plaats}
                  </span>
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
      <p>Geen programma gevonden.</p>
    );
  }


};

TeamSchedule.propTypes = {
  schedule: PropTypes.array.isRequired,
  loading: PropTypes.number.isRequired
};

export default TeamSchedule;
