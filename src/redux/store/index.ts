import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';
import chatReducer from '../reducer/chatReducer';
const store = configureStore({ 
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['chat/connectUser'],
        ignoredPaths: ['chat.socket'],
      },
    }),
});

export default store;