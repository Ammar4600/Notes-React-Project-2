
import { useEffect, useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import Notes from './Pages/Notes'
import UserPage from './Pages/UserPage'
import { useSelector } from 'react-redux'
import { setLocalStorage } from './LocalStorage/localstorage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import View from './Pages/View'


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserPage />, // This is where the home component will be rendered
  },
  {
    path: '/notes',
    element: <Notes />, // This is where the home component will be rendered
  },
  {
    path: "/notes/:id",
    element:  <View/>, 
    
      
  },
  {
    path: "/notes/?id=:id",
    element: <UserPage /> 
  },
  

]);

function App() {

  const data = useSelector((state) => state.Login.value);
  const [user, setuser] = useState("");
  useEffect(() => {
    setLocalStorage();
  })

  useEffect(() => {
    setuser(data.user)
  }, [data])


  return (
    <>

      {!user ? <Login /> : <RouterProvider router={router} />}
    </>
  )
}

export default App
