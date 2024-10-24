import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, fetchSkills } from '../../redux/actions/actions';
import { IoIosCreate } from 'react-icons/io';
import '../../Assets/styles/skills.css';

function Skills() {
  const dispatch = useDispatch();
  const reduxSkills = useSelector((state) => state.skills);

  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillRange, setSkillRange] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  useEffect(() => {
    if (reduxSkills) {
      setSkills(reduxSkills);
    }
  }, [reduxSkills]);

  const handleSkillNameChange = (e) => {
    setSkillName(e.target.value);
  };

  const handleSkillRangeChange = (e) => {
    setSkillRange(e.target.value);
    if (e.target.value < 10 || e.target.value > 100) {
      setErrorMessage('Skill range must be between 10 and 100');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillName) {
      setErrorMessage('Skill name is required');
      return;
    }

    if (errorMessage) {
      return;
    }

    const newSkill = { name: skillName, range: skillRange };
    dispatch(addSkill(newSkill));
    setSkills([...skills, newSkill]);
    setErrorMessage('');
    setSkillName('');
    setSkillRange('');
  };

  const handleAddSkillClick = () => {
    setFormVisible(true);
  };

  return (
    <div data-testid='skills-component' className="skills-container">
      {formVisible ? (
        <div className="skill-border">
          <h2>Skills</h2>
          <form id='skills' onSubmit={handleSubmit} className="skills-form">
            <label>
              Skill name
              <input
                id='inpute-text'
                type="text"
                value={skillName}
                onChange={handleSkillNameChange}
                placeholder="Enter skill Name"
                required
              />
            </label>
            <label>
              Skill range
              <input
                type="number"
                value={skillRange}
                onChange={handleSkillRangeChange}
                placeholder="Enter skill Range"
              />
            </label>

            <button type="submit" className="add-button" disabled={!!errorMessage}>
              Add Skill
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      ) : (
        <button onClick={handleAddSkillClick} className="add-skill-button">
          <IoIosCreate /> Open edit
        </button>
      )}

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-line" style={{ width: `${skill.range}%` }}>
              <p className="skill-name">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='html skill'>HTML</div>
				<div className='css skill'>CSS</div>
				<div className='javascript skill'>JAVASCRIPT</div>
				<div className='react skill'>REACT</div>
      <div className="skill-scale"></div>
    </div>
  );
}

export default Skills;
