import React from 'react';
import '../../Assets/styles/home.css';
import PhotoBox from '../../components/PhotoBox/PhotoBox';

function Home() {
  return (
    <div className="app">
      <div className="background"></div>
      <div className="content">
      <PhotoBox title="Front-End Developer" content="Passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and React. Dedicated to continuous improvement, adaptability, and a strong work ethic. Eager to contribute skills and motivation to any team. Enjoys hiking and the outdoors." />
        <button className='btn'>
          <a href="/inner" >Know more</a>
        </button>
          
        
      </div>
    </div>
  );
}

export default Home;
