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
    path: '/',
    element: <App/>,
    children : [
      {
        path: '/',
        element: <Intro/>
      },
      {
        path: '/login',
        element: <Login/> 
      }

    ]
  }

])

export default router