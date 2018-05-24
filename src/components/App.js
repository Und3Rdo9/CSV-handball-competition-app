import React, {PropTypes} from 'react';
import CompetitionInfo from './competition/CompetitionInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        <CompetitionInfo />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
