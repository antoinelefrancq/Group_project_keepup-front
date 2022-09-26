import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userConnected:false
};

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    testSayHello:(state,actions)=>{
      console.group('hello');
    }
  }
});

export default userSlice.reducer;
export const {testSayHello} = userSlice.actions;