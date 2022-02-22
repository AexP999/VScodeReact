const initialState = {
counter:0
}

export const reducer = (state=initialState,action) => {
  
switch (action.type) {
  case 'INC': {
    return {
      ...state, counter:state.counter + 1
    }
  }
  case 'DEC': {
    return {
      ...state, counter:state.counter - 1
    }
  }
  case 'RESET': {
    return {
      ...state, counter:0
    }
  }
    

  default:
return state;
}
  

}