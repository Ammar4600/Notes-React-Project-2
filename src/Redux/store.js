import { configureStore } from '@reduxjs/toolkit';
import LogSLice from './FeaturesSlices/Login';
import ManageTaskSlice  from './FeaturesSlices/ManageTasks';

export const store = configureStore({
  reducer: {
    Login: LogSLice,
    TasksManage: ManageTaskSlice ,
  
  },
});
