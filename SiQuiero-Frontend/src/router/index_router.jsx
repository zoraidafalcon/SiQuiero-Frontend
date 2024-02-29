import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Intro from '../pages/Intro/Intro'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Home  from '../pages/Home/Home'
import Portada from '../pages/Portada/Portada'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro/>,
  },
  {
    path: '/home',
    element: <Home/>,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
      } else {
        return null
      }
    }

  },
  {
    path: '/portada',
    element: <Portada/>,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
      } else {
        return null
      }
    }
  },
  {
    path: '/login',
    element: <Login/>,
  },  
  {
     path: '/signup',
     element: <Signup/> 
  }

])

export default router