import React from 'react';
import { Link } from 'react-router';

const App = ({
  children,
}) => (
  <div>
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          <Link to="/">
            <img src="/images/logo.png" width="157" height="20" alt="Samyroad" />
          </Link>
        </h1>
      </div>
    </header>
    <main className="item-grid">
      { children }
    </main>
  </div>
);

export default App;
