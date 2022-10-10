import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserById } from '../../api/routes';

const initialState = {
  modaleIsOpen: false,
  userConnected: false,
  isLoading:false,
  user: {},
  userData: {
    firstname: 'Nathan',
    lastname: 'Le Rigolo',
    email: 'nathanbardi@gmail.com',
    dob: '19/01/1990',
    gender: 'non-binaire',
    description: 'Jai un ventre mais moins quAntoine',
    city: 'Amiens',
    zipcode: 59000,
  },
};

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async ({ id }, thunkAPI) => {
    try {
      const response = await getUserById(id);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openModale: (state) => {
      state.modaleIsOpen = true;
    },
    closeModale: (state) => {
      state.modaleIsOpen = false;
    },
    importLocalData: (state, actions) => {
      const localKeys = Object.fromEntries(
        Object.entries(actions.payload.form).filter(
          ([key]) => key !== 'password' && key !== 'sports'
        )
      );
      state.user = localKeys;
    },
  },
  extraReducers: {
    /**
     * Fetch all messages from an event
     */

    [getUserData.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.user = payload.user;
      }
    },
    [getUserData.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
export const { openModale, closeModale, importLocalData } = userSlice.actions;
