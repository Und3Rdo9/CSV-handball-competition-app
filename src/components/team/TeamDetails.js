import React, { PropTypes } from 'react';
import TeamSchedule from './TeamSchedule';
import TeamResults from './TeamResults';
import TeamRanking from './TeamRanking';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const scheduleIcon = '<use xlink:href="#schedule"></use>';
const resultsIcon = '<use xlink:href="#results"></use>';
const rankingIcon = '<use xlink:href="#ranking"></use>';

const TeamDetails = ({ selectedTeam, selectedGroup, schedule, results, ranking, requestsInProgress }) => {
  if (!selectedGroup > 0) {
    return (
      <div className="alert alert-warning" role="alert"><strong>Geen team geselecteerd!</strong><br/>Selecteer eerst een team uit lijst om competitie-informatie te tonen.</div>
    );
  }
  else {
    return (
      <Tabs >
        <TabList>
          <Tab>
            <svg className="tab__icon" dangerouslySetInnerHTML={{__html: scheduleIcon}}></svg>
            <span className="tab__heading">Programma</span>
          </Tab>
          <Tab>
            <svg className="tab__icon" dangerouslySetInnerHTML={{__html: resultsIcon}}></svg>
            <span className="tab__heading">Uitslagen</span>

          </Tab>
          <Tab>
            <svg className="tab__icon" dangerouslySetInnerHTML={{__html: rankingIcon}}></svg>
            <span className="tab__heading">Stand</span>

          </Tab>
        </TabList>

        <TabPanel>
          <h2>Programma</h2>
          <TeamSchedule
            schedule={schedule}
            loading={requestsInProgress.schedules}
          />
        </TabPanel>

        <TabPanel>
          <h2>Uitslagen</h2>
          <TeamResults
            results={results}
            loading={requestsInProgress.results}
          />
        </TabPanel>

        <TabPanel>
          <h2>Stand</h2>
          <TeamRanking
            ranking={ranking}
            loading={requestsInProgress.rankings}
          />
        </TabPanel>
      </Tabs>
    );
  }

};

TeamDetails.propTypes = {
  selectedTeam: PropTypes.number.isRequired,
  selectedGroup: PropTypes.number.isRequired,
  schedule: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
  ranking: PropTypes.array.isRequired,
  requestsInProgress: PropTypes.object.isRequired
};


export default TeamDetails;
