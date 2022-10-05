import { createSlice } from '@reduxjs/toolkit';

interface UserState{
  modaleIsOpen:boolean,
  userConnected:boolean,
}

const initialState:UserState = {
  modaleIsOpen:false,
  userConnected:false
};

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    openModale:(state)=>{
      state.modaleIsOpen=true;
    },
    closeModale:(state)=>{
      state.modaleIsOpen=false;
    }
  }
});

export default userSlice.reducer;
export const { openModale, closeModale} = userSlice.actions;