import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from './appSlice';
import myListReducer from '@features/myList/myListSlice';

const rootReducers = combineReducers({
  app: appReducer,
  myList: myListReducer,
});
const sagaMiddleware = createSagaMiddleware();

const rootSaga = function* rootSaga() {
  yield all([]);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'myList'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    middlewares.push(sagaMiddleware);

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares;
  },
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducers>;
