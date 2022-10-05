import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  modaleIsOpen:false,
  userConnected:false,
  userData:{
    firstname:'Nathan',
    lastname:'Le Rigolo',
    email:'nathanbardi@gmail.com',
    dob:'19/01/1990',
    gender:'non-binaire',
    description:'J\'ai un ventre mais moins qu\'Antoine',
    city:'Amiens',
    zipcode:59000,
  }
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
    },
    importLocalData:(state, actions) =>{
      const localKeys = Object.fromEntries(Object.entries(actions.payload.form).filter(([key]) => ((key !== 'password') && (key !== 'sports'))));
      state.userData=localKeys;
    }
  }
});

export default userSlice.reducer;
export const { openModale, closeModale, importLocalData} = userSlice.actions;