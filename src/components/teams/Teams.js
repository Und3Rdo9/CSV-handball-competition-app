import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamList from './TeamList';
import * as teamsActions from './../../actions/teamsActions';
import * as uiActions from './../../actions/uiActions';
import { sortTeams, getAgeCategories } from './../../selectors/selectors';

class Teams extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedTeam: ''
    };

    this.handleTeamSelect = this.handleTeamSelect.bind(this);
  }

  handleTeamSelect(changeEvent) {
    const values = JSON.parse(changeEvent.target.value);
    this.props.actions.selectTeam(values.team, values.group);
  }

  render() {
    const { teams, ageCategories, selectedTeam } = this.props;

    return (
      <div className="team-list panel panel-default">
        <div className="panel-heading">Selecteer een team:</div>
        {Object.keys(teams).length && <TeamList
          teams={teams}
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
  teams: PropTypes.object.isRequired,
  ageCategories: PropTypes.array.isRequired,
  selectedTeam: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    teams: sortTeams(state.teams.allTeams),
    ageCategories: getAgeCategories(state.teams.allTeams),
    selectedTeam: state.ui.selectedTeam,
    selectedGroup: state.ui.selectedGroup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...teamsActions, ...uiActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
