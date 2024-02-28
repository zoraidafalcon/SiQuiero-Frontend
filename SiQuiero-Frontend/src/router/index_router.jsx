import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Welcome from '../pages/Welcome/Welcome'
import Login from '../pages/Login/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children : [
      {
        path: '/welcome',
        element: <Welcome/> 
      },
      {
        path: '/login',
        element: <Login/> 
      }

    ]
  }

])

export default router