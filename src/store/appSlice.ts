import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface AppState {
  internetState: boolean;

  loadingApp: boolean;

  showDialog: boolean;

  dialogMessage: string | undefined;

  lang: string;
}

const initialState: AppState = {
  internetState: true,
  loadingApp: false,
  showDialog: false,
  dialogMessage: 'Loading',
  lang: 'vi',
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onSetInternet: (state, { payload }: PayloadAction<boolean>) => {
      state.internetState = payload;
    },
    onLoadApp: (state) => {
      state.loadingApp = true;
    },
    onLoadAppEnd: (state) => {
      state.loadingApp = false;
    },
    onStartProcess: (state, { payload }: PayloadAction<string>) => {
      state.dialogMessage = payload;
      state.showDialog = true;
    },
    onEndProcess: (state) => {
      state.showDialog = false;
      state.dialogMessage = '';
    },

    onChangeLang: (state, { payload }: PayloadAction<string>) => {
      state.lang = payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
