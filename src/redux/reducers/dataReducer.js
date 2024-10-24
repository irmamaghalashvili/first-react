const initialState = {
    skills: [], 
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SKILL':
        return {
          ...state,
          skills: [...state.skills, action.payload],
        };

      // ...
      default:
        return state;
    }
  };
  
  export default dataReducer;
  