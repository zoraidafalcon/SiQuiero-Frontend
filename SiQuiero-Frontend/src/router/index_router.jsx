import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Intro from '../pages/Intro/Intro'
import Login from '../pages/Login/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro/>
  },
  {
    path: '/login',
    element: <Login/> 
  },
  {
    path: '/',
    element: <App/>,
    children : [
      {
        path: '/',
        element: <Intro/>
      },

    ]
  }

])

export default router