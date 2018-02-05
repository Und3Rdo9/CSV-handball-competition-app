import React, { PropTypes } from 'react';
import TeamListSection from './TeamListSection';

const TeamList = ({teams, ageCategories, selectedTeam, handleTeamSelect}) => {
  return (
    <ul className="list-group">
      {ageCategories.map( (cat, index) =>
        <TeamListSection
          key={index}
          teams={teams}
          selectedTeam={selectedTeam}
          handleTeamSelect={handleTeamSelect}
          category={cat}
        />
      )}
    </ul>
  );
};

TeamList.propTypes = {
  teams: PropTypes.object.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  handleTeamSelect: PropTypes.func.isRequired,
  ageCategories: PropTypes.array.isRequired
};

export default TeamList;
