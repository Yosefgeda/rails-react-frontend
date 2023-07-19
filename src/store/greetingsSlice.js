import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    setGreetings: (state, action) => ({
      ...state,
      greetings: action.payload,
    }),
  },
});

export const { setGreetings } = greetingsSlice.actions;

export default greetingsSlice.reducer;

export const fetchGreetings = () => async (dispatch) => {
  try {
    const res = await fetch('http://127.0.0.1:3000/');
    const data = await res.json();
    dispatch(setGreetings(data));
  } catch (error) {
    console.log(error);
  }
};
