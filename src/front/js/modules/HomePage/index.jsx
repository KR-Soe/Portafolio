import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className='container' id='home'>
        <div>
          <center>
            <h1>Soe</h1>
            <h3>React Js Project</h3>
            <img src='static/images/portrait.jpg' alt='portrait' className='portrait'/>
            <h3>Sergio Fabian Vera Alvarez</h3>
          </center>
        </div>
      </div>
    );
  };
};

export default HomePage;
