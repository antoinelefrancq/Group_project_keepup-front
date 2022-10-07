import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/routes';

const initialState = {
  user_id: null,
  user: null,
  message_id: null,
  messages: [],
  connected: false,
  isLoading: false,
  cartItems: [],
};

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async ({ id }, thunkAPI) => {
    try {
      const response = await api.getMessageFromEventById(id);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const deleteOneMessage = createAsyncThunk(
  'chat/deleteOneMessage',
  async ({ id }, thunkAPI) => {
    try {
      console.log('delete');
      const response = await api.deleteOneMessageById(id);

      thunkAPI.dispatch(deleteMessage({ id }));
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    connectUser: (state, { payload: { user, payload } }) => {
      if (!state.connected) {
        state.user = user;
        state.messages.unshift(payload);
        state.connected = true;
      }
    },
    disconnectUser: (state, actions) => {
      state.connected = false;
      state.user = null;
    },
    addMessage: (state, { payload }) => {
      state.messages.unshift(payload);
    },
    deleteMessage: (state, { payload }) => {
      state.messages = state.messages.filter((item) => item._id !== payload.id);
    },
  },
  extraReducers: {
    /**
     * Fetch all messages from an event
     */

    [fetchMessages.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMessages.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.messages = [...payload.messages];
      }
    },
    [fetchMessages.rejected]: (state, action) => {
      state.isLoading = false;
    },

    /**
     * Delete one message
     */
    [deleteOneMessage.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteOneMessage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [deleteOneMessage.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default chatSlice.reducer;
export const { connectUser, disconnectUser, addMessage, deleteMessage } =
  chatSlice.actions;
