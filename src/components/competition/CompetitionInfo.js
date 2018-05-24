import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as competitionActions from './../../actions/competitionActions';

import Teams from './../teams/Teams';
import TeamDetails from './../team/TeamDetails';

export class CompetitionInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
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

  render() {
    const { selectedTeam, selectedGroup, schedules, results, rankings, requestsInProgress } = this.props;
    const selectedGroupSchedule = schedules[selectedGroup] || [];
    const selectedGroupResults = results[selectedGroup] || [];
    const selectedGroupRanking = rankings[selectedGroup] || [];

    return (
      <div className="row">
        <aside className="columns small-12 medium-4">
          <Teams />
        </aside>
        <main className="columns small-12 medium-8">
          <TeamDetails
            selectedTeam={selectedTeam}
            selectedGroup={selectedGroup}
            schedule={selectedGroupSchedule}
            results={selectedGroupResults}
            ranking={selectedGroupRanking}
            requestsInProgress={requestsInProgress}
          />
        </main>
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
