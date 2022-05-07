import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  const data = {
    browsers: [
      {
        id: 1,
        title: 'Mozilla Firefox',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
        description:
          'Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.',
      },
      {
        id: 2,
        title: 'Google Chrome',
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
        description:
          "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!",
      },
      {
        id: 3,
        title: 'Microsoft Edge',
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png',
        description:
          'Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.',
      },
    ],
    navbar: ['Home', 'About', 'Contact'],
  };

  return (
    <div className="App">
      <Header navbar={data.navbar} />
      <Content browsers={data.browsers} />
      <Footer />
    </div>
  );
}

export default App;
