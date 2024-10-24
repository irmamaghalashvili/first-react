import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import '../../Assets/styles/secondPage.css';
import InfoWrapper from '../Info/InfoWrapper';
import Feedback from '../Feedback/index';
import Exprerience from '../Experience/index';
import Portfolio from '../Portfolio/index';
import Address from '../Address/index';
import Education from '../Education/index';
import Skills from '../Skills/index';

import { IoIosArrowUp } from 'react-icons/io';

function SecondPage({ collapsed }) {
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div data-testid='second-page-component' className={`container ${collapsed ? 'collapsed' : null}`}>
      <header className='about-me'>
      </header>
        <div className="box-content">
          <h2>About me</h2>
          <p className='about-me'>About me, I am a passionate Front-End Developer with a strong focus on web technologies like HTML, CSS, JavaScript, and React. I am dedicated to continuously improving my skills and delivering high-quality web experiences. When I am not coding, I enjoy hiking and exploring the great outdoors. Over the past two years, I have acquired valuable skills in web development, focusing on HTML, CSS, JavaScript, TypeScript, and more recently, React. While I have not yet had the opportunity to work professionally in this field, my dedication, adaptability, and strong work ethic have prepared me to excel. I thrive on challenges and view each new project as an opportunity to learn, innovate, and push my boundaries. My unwavering motivation drives me to continually improve and contribute to the success of any team I join. <a href="https://drive.google.com/file/d/1UMDOaXdSdWo7mW9BagmJMKOvC5Nxgp5F/view?usp=drive_link" target="_blank" rel="noreferrer"> My self-presentation video </a> and <a href="https://drive.google.com/file/d/1UPtL_VAMHxRM9r-qSM4IJ1TD8MMIzu3a/view?usp=drive_link" target="_blank" rel="noreferrer">A Capstone project presentation. </a></p>
        </div>
      <InfoWrapper>
        <Education />
      </InfoWrapper>
      <Exprerience collapsed={true} />
      <Provider store={store}>
        <Skills />
      </Provider>
      <Portfolio collapsed={false} />
      <Address collapsed={true} />
      <Feedback collapsed={true} />

      <button className='up-btn' onClick={scrollToTop}> <IoIosArrowUp /> </button>
    </div>
  );
}

export default SecondPage;
