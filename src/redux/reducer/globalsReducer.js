import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading:false,
};

export const globalSlice = createSlice({
  name: 'globals',
  initialState,
  reducers: {
    enableLoader:(state)=>{
      state.isLoading=true;
    },
    disableLoader:(state)=>{
      state.isLoading=false;
    }
  },
});

export default globalSlice.reducer;
export const { enableLoader, disableLoader } =
globalSlice.actions;
