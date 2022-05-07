import React from 'react';
import WebCard from './WebCard';

const Content = ({ browsers }) => {
  return (
    <section>
      <h2>POPULAR WEB BROWSERS</h2>
      <div className="browsers">
        {browsers.map((browser) => {
          return (
            <WebCard
              key={browser.id}
              title={browser.title}
              url={browser.url}
              text={browser.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Content;
