const data = [
    {
      user: "employee",
      name: "Ammar",
      email: "e1@1.com",
      password: "123",
      taskList: [],
    },
    {
      user: "employee",
      name: "Saad",
      email: "e2@2.com",
      password: "123",
      taskList: [],
    },
    {
      user: "employee",
      name: "Maryam",
      email: "e3@3.com",
      password: "123",
      taskList: [],
    }
  ];

  export const setLocalStorage = () => {
    if(!localStorage.getItem('employee')){
        localStorage.setItem("employee", JSON.stringify(data));
    } 
  };