import React, { PropTypes } from 'react';
import TeamListItem from './TeamListItem';

const TeamListSection = ({category, teams, selectedTeam, handleTeamSelect}) => {
  return (
    <li className="team-list__section list-group-item">
        <h4 className="list-group-item-heading">{category}</h4>
        {Object.keys(teams[category]).map( (key, index) =>
          <TeamListItem
            team={teams[category][key]}
            selectedTeam={selectedTeam}
            handleTeamSelect={handleTeamSelect}
            key={teams[category][key].teamcode}
          />
        )}
    </li>
  );
};

TeamListSection.propTypes = {
  category: PropTypes.string.isRequired,
  selectedTeam: PropTypes.number.isRequired,
  handleTeamSelect: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired
};

export default TeamListSection;
