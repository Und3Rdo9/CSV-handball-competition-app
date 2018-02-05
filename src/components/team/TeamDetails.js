import React, { PropTypes } from 'react';
import TeamSchedule from './TeamSchedule';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TeamDetails = ({ selectedTeam, schedule, requestsInProgress }) => {
  if (!selectedTeam.length > 0) {
    return (
      <div className="alert alert-warning" role="alert"><strong>Geen team geselecteerd!</strong><br/>Selecteer eerst een team uit lijst om competitie-informatie te tonen.</div>
    );
  }
  else {
    return (
      <Tabs >
        <TabList>
          <Tab>Programma</Tab>
          <Tab>Stand</Tab>
          <Tab>Uitslagen</Tab>
        </TabList>

        <TabPanel>
          <h2>Programma</h2>
          <TeamSchedule
            schedule={schedule}
            loading={requestsInProgress.schedule}
          />
        </TabPanel>

        <TabPanel>
          <h2>Stand</h2>
        </TabPanel>

        <TabPanel>
          <h2>Uitslagen</h2>
        </TabPanel>
      </Tabs>
    );
  }

};

TeamDetails.propTypes = {
  selectedTeam: PropTypes.string.isRequired,
  schedule: PropTypes.array.isRequired,
  requestsInProgress: PropTypes.object.isRequired
};


export default TeamDetails;
