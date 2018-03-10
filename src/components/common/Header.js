import React, {PropTypes} from 'react';

const Header = () => {
  return (
    <header className="jumbotron">
      <h1 className="display-4">CSV Competitie-app</h1>
      <p className="lead">Vind hier alle competitie-informatie van alle CSV-teams. </p>
      <hr className="my-4" />
      <p>Gebruik de selectievelden en filters om de gewenste informatie op te vragen.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Kies een team</a>
      </p>
    </header>
  );
};

export default Header;
