export const addSkill = (skill) => {
    return {
      type: 'ADD_SKILL',
      payload: skill,
    };
  };
  export const fetchSkills = () => {
    return async (dispatch) => {
      try {
        // Make the actual API request
        const response = await fetch('/api/skills');
        const data = await response.json();
  
        // Dispatch an action to update the Redux store with the fetched skills
        dispatch({ type: 'FETCH_SKILLS_SUCCESS', payload: data });
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching skills:', error);
      }
    };
  };