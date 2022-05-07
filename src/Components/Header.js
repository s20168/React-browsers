import React from 'react';

const Header = ({ navbar }) => {
  return (
    <header>
      <p>NAVIGATION BAR</p>
      <nav>
        <ol className="nav-list">
          {navbar.map((title) => {
            return <li>{title}</li>;
          })}
        </ol>
      </nav>
    </header>
  );
};

export default Header;
