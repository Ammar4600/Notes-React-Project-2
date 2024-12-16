import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  value: localStorage.getItem("logeduser") ? JSON.parse(localStorage.getItem("logeduser")) : ''
};

const ManageTaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addtask: (state, action) => {
      const ourdata = action.payload;
      const employeelocaldata = JSON.parse(localStorage.getItem("employee"))
      if (employeelocaldata) {
        if (Array.isArray(employeelocaldata)) {
          employeelocaldata.forEach((item) => {
            if (item.email == ourdata.email) {
              item.taskList.push(ourdata);
              state.value = item;
              localStorage.setItem("logeduser", JSON.stringify(item));
              localStorage.setItem("employee", JSON.stringify(employeelocaldata));

              console.log(state.value)
              toast.success('Task Added Succesfully')
            }

          })
        } else {
          if (employeelocaldata.email == ourdata.email) {
            employeelocaldata.taskList.push(ourdata);
            state.value = employeelocaldata;
            localStorage.setItem("logeduser", JSON.stringify(employeelocaldata));
            localStorage.setItem("employee", JSON.stringify(employeelocaldata));
            toast.success('Task Added Succesfully')
          }
        }
      }

    },
    loadUserTasks: (state) => {
      // Sync Redux state with localStorage
      const loggedUser = localStorage.getItem("logeduser");
      state.value = loggedUser ? JSON.parse(loggedUser) : '';
    },

    updatetask: (state, action) => {
      const newdata = action.payload;
      const employeelocaldata = JSON.parse(localStorage.getItem('employee'));
      const loged = JSON.parse(localStorage.getItem('logeduser'))
      
      if (Array.isArray(employeelocaldata)) {
        const index = employeelocaldata.findIndex((e) => e.email == newdata.email)
        if (Array.isArray(employeelocaldata[index].taskList)) {
          const taskindex = employeelocaldata[index].taskList.findIndex((e) => e._Id == newdata._Id)
          employeelocaldata[index].taskList[taskindex] = newdata;
          loged.taskList[taskindex] = newdata
          state.value = loged;
          localStorage.setItem('employee', JSON.stringify(employeelocaldata))
          localStorage.setItem('logeduser', JSON.stringify(loged))
          toast.success('Task Updates Succesfully')
        } else {
          const taskindex = employeelocaldata.taskList.findIndex((e) => e._Id == newdata._Id)
          employeelocaldata.taskList[taskindex] = newdata;
          loged.taskList[taskindex] = newdata
          state.value = loged;
          localStorage.setItem('employee', JSON.stringify(employeelocaldata))
          localStorage.setItem('logeduser', JSON.stringify(loged))
          toast.success('Task Updates Succesfully')
        }

      }
    },
    removetask: (state, action) => {
      const ourdata = action.payload;
      const employeelocaldata = JSON.parse(localStorage.getItem('employee'));

      if (employeelocaldata) {
        if (Array.isArray(employeelocaldata)) {
          const index = employeelocaldata.findIndex((item) => item.email == ourdata.email);

          if (Array.isArray(employeelocaldata[index].taskList)) {
            const taskindex = employeelocaldata[index].taskList.findIndex((e) => e.title == ourdata.title)
            console.log(employeelocaldata[index].taskList)
            employeelocaldata[index].taskList.splice(taskindex, 1)
            state.value = employeelocaldata[index]
            localStorage.setItem('logeduser', JSON.stringify(employeelocaldata[index]))
            localStorage.setItem('employee', JSON.stringify(employeelocaldata))
            toast("Task Deleted")
          }
        }

      }



    },
    resetalltask: (state, action) => {

    },
  },
});

export const { addtask, updatetask, removetask, resetalltask, loadUserTasks } = ManageTaskSlice.actions;
export default ManageTaskSlice.reducer;
