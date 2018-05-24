import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as competitionActions from './../../actions/competitionActions';

import Teams from './../teams/Teams';
import TeamDetails from './../team/TeamDetails';

export class CompetitionInfo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectionOpen: true
    };

    this.toggleTeamSelection = this.toggleTeamSelection.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.selectedGroup !== nextProps.selectedGroup) {
      const existingSchedule = this.props.schedules[nextProps.selectedGroup];
      if (!existingSchedule) {
        this.props.actions.getGroupSchedule(nextProps.selectedGroup);
        this.props.actions.getGroupResults(nextProps.selectedGroup);
        this.props.actions.getGroupRanking(nextProps.selectedGroup);
      }
    }
  }

  toggleTeamSelection() {
    this.setState({
      selectionOpen: !this.state.selectionOpen
    });
  }

  render() {
    const { selectedTeam, selectedGroup, schedules, results, rankings, requestsInProgress } = this.props;
    const selectedGroupSchedule = schedules[selectedGroup] || [];
    const selectedGroupResults = results[selectedGroup] || [];
    const selectedGroupRanking = rankings[selectedGroup] || [];

    return (
      <div className="competition-info">
        <aside className={'competition-info__team-selection ' + (this.state.selectionOpen ? 'competition-info__team-selection--open' : '')}>
          <Teams />
        </aside>
        <main className="competition-info__team-details">
          <TeamDetails
            selectedTeam={selectedTeam}
            selectedGroup={selectedGroup}
            schedule={selectedGroupSchedule}
            results={selectedGroupResults}
            ranking={selectedGroupRanking}
            requestsInProgress={requestsInProgress}
          />
        </main>
        <button className="competition-info__toggle-selection" onClick={this.toggleTeamSelection}>
          <span className="sr-only">Teamselectie openen</span>
        </button>
      </div>
    );
  }
}

CompetitionInfo.propTypes = {
  selectedTeam: PropTypes.number.isRequired,
  selectedGroup: PropTypes.number.isRequired,
  schedules: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  rankings: PropTypes.object.isRequired,
  requestsInProgress: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    selectedTeam: state.ui.selectedTeam,
    selectedGroup: state.ui.selectedGroup,
    schedules: state.competition.schedules,
    results: state.competition.results,
    rankings: state.competition.rankings,
    requestsInProgress: state.ui.requests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(competitionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionInfo);
