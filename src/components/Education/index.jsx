import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import educationData from "../../TimeLine/education.json";
import "../../Assets/styles/education.css";

function Education() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
      setError(false);
  }, []);


  if (loading) {
    return (
      <div className='education-loading'>
        <FontAwesomeIcon className="loading-icon" icon={faSyncAlt} spin />
      
      </div>
    );
  }
  if (error) {
    return (
      <div className='education-error'>
        Something went wrong: please review your server connection!
      </div>
    )
  }


  return (
    <div data-testid="education-component" className="education">
      <h3>Education</h3>
      {educationData.map((education, index) => (
        <div className='educationDiv' key={index}>
          <span className='educationSpan'>
            <h5>{education.info.title} </h5>
            <div className='divider'></div>
            <span>{education.data}</span>
            
          </span>
          <div className='eduDiv'>
            <p>{education.info.description}</p>
          </div>
        </div>


      ))}


    </div>
  );
}

export default Education;