import React from 'react';
import '../../Assets/styles/feedback.css';
import feedbackData from '../../TimeLine/feedback.json'; 

function Feedback() {
  return (
    <footer className='feedbacks'>
      <h2>Feedback</h2>
      {feedbackData.map((feedback, index) => (
        <div key={index} className="feedback-item">
          <p>{feedback.feedback}</p>
          <div className="reporter">
            <img src={feedback.reporter.photoUrl} alt={feedback.reporter.name} className='feedback-avatar' />
            <div className="reporter-info">
              <h5 className="reporter-name">{feedback.reporter.name}</h5>
              <a href={feedback.reporter.citeUrl} target="_blank" rel="noreferrer" className="reporter-cite">
                {feedback.reporter.citeUrl}
              </a>
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
}

export default Feedback;
