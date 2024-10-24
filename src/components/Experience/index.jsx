import React from "react";
import "../../Assets/styles/experience.css";
import experienceData from "../../TimeLine/experience.json";

function Experience() {
  return (
    <div data-testid="experience-component"  className="experience">
      <h3>Experience</h3>
      {experienceData.map((experience, index) => (
        <div className="experienceDiv" key={index}>
          <span>
            <span className="expSpan">{experience.info.company}</span>
            <div className="divider"></div>
            {experience.date}
          </span>
          <div className="experDiv">
            <h5>{experience.info.job}</h5>
            <p>{experience.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
