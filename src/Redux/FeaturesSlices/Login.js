import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';


const initialState = {
  value: localStorage.getItem("logeduser") ? JSON.parse(localStorage.getItem("logeduser")) : '',
};

const LogSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    Log_in: (state , action) => {
      const ourdata = action.payload;
      const employeelocaldata = JSON.parse(localStorage.getItem("employee"))
    if(employeelocaldata){
        if (Array.isArray(employeelocaldata)) {

          const index =  employeelocaldata.find((item)=> item.email == ourdata.email && item.password == ourdata.password)
          if(index){
            state.value = index;  
            console.log(index)
            console.log(state.value)
            localStorage.setItem("logeduser" , JSON.stringify(state.value));
            toast.success("Loged-in")
          } else{
            toast.error("Invalid Credintials")
          }
                  

        } else{
            if(employeelocaldata.email == ourdata.email && employeelocaldata.password == ourdata.password){
                state.value = employeelocaldata;
                localStorage.setItem("logeduser" , JSON.stringify(state.value));
                toast.success("Loged in")
            } else{
            toast.error('invalid credintials')
            }
        }
    }
    },
    Log_out: (state, action) => {
        localStorage.setItem("logeduser" , '');
        state.value = ''
        toast.success("Loged-out")
    },
  },
});

export const {Log_in , Log_out  } = LogSlice.actions;
export default LogSlice.reducer;
