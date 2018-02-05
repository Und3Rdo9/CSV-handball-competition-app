import React, {PropTypes} from 'react';
import Header from './common/Header';
import CompetitionInfo from './competition/CompetitionInfo';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <CompetitionInfo />
        </div>

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
