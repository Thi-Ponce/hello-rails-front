// constants
const GET_GREETINGS = 'GREETINGS/GET_GREETINGS';
const SET_GREETINGS = 'GREETINGS/SET_GREETINGS';

// initial state
const initialState = { message: null };

// action creators
export const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

// thunk action functions
export const getDataFromAPI = () => async (dispatch) => {
  await fetch('http://127.0.0.1:3000/v1/messages')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: SET_GREETINGS,
        payload: json.message,
      });
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS: {
      return action.payload;
    }
    case SET_GREETINGS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
