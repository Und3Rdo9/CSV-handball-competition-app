import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as competitionActions from './../../actions/competitionActions';

import Teams from './../teams/Teams';
import TeamDetails from './../team/TeamDetails';

class CompetitionInfo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this.getTeamSchedule = this.getTeamSchedule.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.selectedTeam !== nextProps.selectedTeam) {
      const existingSchedule = this.props.schedules[nextProps.selectedTeam];
      console.log('does exist?', !(!existingSchedule));
      if (!existingSchedule) {
        console.log('does not exist, fetching');
        this.props.actions.getTeamSchedule(nextProps.selectedTeam);
      }
    }
  }

  getTeamSchedule(team, schedules) {
    return schedules[team] || [];
  }

  render() {
    const { selectedTeam, schedules, requestsInProgress } = this.props;
    const selectedTeamSchedule = this.getTeamSchedule(selectedTeam, schedules);

    return (
      <div>
        <aside className="col-xs-12 col-md-4">
          <Teams />
        </aside>
        <main className="col-xs-12 col-md-8">
          <TeamDetails
            selectedTeam={selectedTeam}
            schedule={selectedTeamSchedule}
            requestsInProgress={requestsInProgress}
          />
        </main>
      </div>
    );
  }
}

CompetitionInfo.propTypes = {
  selectedTeam: PropTypes.string.isRequired,
  schedules: PropTypes.object.isRequired,
  requestsInProgress: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    selectedTeam: state.teams.selectedTeam,
    schedules: state.competition.schedules,
    requestsInProgress: state.ui.requests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(competitionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionInfo);
