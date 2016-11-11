import React from 'react';

const App = ({
  children,
}) => (
  <div>
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          <a href="/">
            <img src="/images/logo.png" width="157" height="20" alt="Samyroad" />
          </a>
        </h1>
      </div>
    </header>
    <main className="item-grid">
      { children }
    </main>
  </div>
);

export default App;
