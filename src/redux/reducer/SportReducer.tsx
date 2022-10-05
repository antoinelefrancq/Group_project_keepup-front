import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSportsLevel } from '../../api/routes';
import axios from 'axios';
import { signup } from '../../constant';

interface sportNode{
  sports:{
    _id:string,
    sport:string,
  },
  level:string,
}
interface getState{
  genderValue:string[]|[],
  sportlist:[]|{_id:string, sport:string}[],
  levelList:[]|string[],
  sportSelected:sportNode
}

const initialState:getState = {
  genderValue:[],
  sportlist:[],
  levelList:[],
  sportSelected:{sports:{_id:'', sport:''},level:''}
};
const url = signup;

export const fetchSport = createAsyncThunk(
  'sportData/fetchSport',
  async() => {
    try{
      const response = await axios(url);
      return response.data;
    }catch(err){
      console.log(err);
    }
  }
);
export const SportSlice = createSlice({
  name:'sportData',
  initialState,
  reducers:{
    hello:(state)=>{
      console.log('hello');
    },
  },
  extraReducers: builder=> {
    builder.addCase(fetchSport.fulfilled,(state,action)=>{
      state.genderValue=action.payload.gender;
      state.levelList=action.payload.level;
      state.sportlist=action.payload.sports;
      state.sportSelected={sports:action.payload.sports[0],level:action.payload.level[0]};
    }).addCase(fetchSport.rejected,(state)=>{
      console.log('rejected');
    });
  },
});

export default SportSlice.reducer;
export const {hello} = SportSlice.actions;
