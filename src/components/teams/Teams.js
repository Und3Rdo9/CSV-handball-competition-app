import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import TeamListSection from './TeamListSection';
import TeamList from './TeamList';
import * as teamsActions from './../../actions/teamsActions';

class Teams extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedTeam: ''
    };

    this.sortTeams = this.sortTeams.bind(this);
    this.getAgeCategories = this.getAgeCategories.bind(this);
    this.handleTeamSelect = this.handleTeamSelect.bind(this);
  }

  sortTeams(teams) {
    if(teams.length > 0) {
      let sortedTeams = [];
      sortedTeams = [...teams];

      let teamsSortedByAge = sortedTeams.reduce( (acc, curr) => {
        if (!(curr.leeftijdscategorie in acc)) { acc[curr.leeftijdscategorie] = {}; }
        acc[curr.leeftijdscategorie][curr.teamcode] = curr;
        return acc;
      }, {});

      return teamsSortedByAge;
    }
  }

  getAgeCategories(teams) {
    if (teams.length) {
      let ageCategories = [];

      for (let i = 0; i < teams.length; i++) {
        if (ageCategories.indexOf(teams[i].leeftijdscategorie) < 0) {
          ageCategories.push(teams[i].leeftijdscategorie);
        }
      }

      return ageCategories;
    }

  }

  handleTeamSelect(changeEvent) {
    this.props.actions.selectTeam(changeEvent.target.value);
  }

  render() {
    const { teams, selectedTeam } = this.props;
    const sortedTeams = this.sortTeams(teams);
    const ageCategories = this.getAgeCategories(teams);

    return (
      <div className="team-list panel panel-default">
        <div className="panel-heading">Selecteer een team:</div>
        {teams.length && <TeamList
          teams={sortedTeams}
          selectedTeam={selectedTeam}
          handleTeamSelect={this.handleTeamSelect}
          ageCategories={ageCategories}
        />

        }
      </div>
    );
  }
}

Teams.propTypes = {
  teams: PropTypes.array.isRequired,
  selectedTeam: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    teams: state.teams.allTeams,
    selectedTeam: state.teams.selectedTeam
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(teamsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
