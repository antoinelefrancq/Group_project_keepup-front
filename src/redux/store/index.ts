import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducer/userReducer';
import SportReducer from '../reducer/SportReducer';
import formReducer from '../reducer/formSignup';
import chatReducer from '../reducer/chatReducer';
import globalsReducer from '../reducer/globalsReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    form: formReducer,
    SportReducer,
    globals:globalsReducer,
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
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch