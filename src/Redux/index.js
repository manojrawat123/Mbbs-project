import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';


const initialState = {
  user: null,
  colleges: [],
  token: null,
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.token = action.payload;
        const decodeToken= jwtDecode(state.token)
        state.user= decodeToken.account_id
    },      
    setColleges: (state, action) => {
      state.colleges = action.payload;
    },
  },
});

export const { setUser, setColleges } = mySlice.actions;

export default mySlice.reducer;
