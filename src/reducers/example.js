const initialState = '';

const example = (state = initialState, action) => {
  switch(action.type) {
    case " ":
      return ;
    default: 
      return state;
  }
};

export default example;
