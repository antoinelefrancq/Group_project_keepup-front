import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  sportList: [],
  sportToSend: [],
  test: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addSport: (state, { payload }) => {
      console.log(payload);
      const levels = ['Débutant', 'Intermediaire', 'Expert'];
      if (payload.id !== '' && payload.id !== null) {
        if (levels.includes(payload.level)) {
          console.log(payload);
          const isExist = state.sportList.find(
            (item) => item.id === payload.id
          );
          if (!isExist) {
            state.sportList.push(payload);
            state.sportToSend.push({
              sport: payload.id,
              level: payload.level,
            });
          } else {
            toast.error('Ce sport est déjà dans la liste !');
          }
        }
      }
    },
    deleteSport: (state, { payload }) => {
      state.sportList = state.sportList.filter(
        (item) => item.id !== payload.id
      );
    },
    // updateLevel: (state, { payload }) => {
    //   console.log(payload);
    //   console.log(state.sportList);
    //   state.sportList = state.sportList.filter(
    //     (item) => item.id !== payload.id
    //   );
    //   console.log(state);
    // },
  },
});

export default formSlice.reducer;
export const { addSport, deleteSport, updateLevel } = formSlice.actions;

// [{level:'', sport:''!!!c 'est un id'}]
