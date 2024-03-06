import { createBrowserRouter } from 'react-router-dom'
import Intro from '../pages/Intro/Intro'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Home  from '../pages/Home/Home'
import Portada from '../pages/Portada/Portada'
import Pasos from '../pages/Pasos/Pasos'
import Invitacion from '../pages/Invitacion/Invitacion'
import Ubicacion from '../pages/Ubicacion/Ubicacion'
import Regalos from '../pages/Regalos/Regalos'
import GiftList from '../pages/GiftList/GiftList'
import Configuracion from '../pages/Configuracion/Configuracion'
import Design from '../pages/Design/Design'
import Paginas from '../pages/Paginas/Paginas'
import Actividad from '../pages/Actividad/Actividad'

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
    path: '/pasos',
    element: <Pasos/>,
  },
  {
    path: '/regalos',
    element: <GiftList/>,
  },
  {
    path: '/invitacion/info',
    element: <Invitacion/>,
    // children: [
    //  {
    //     path: '/invitacion/regalos',
    //     element: <Regalos/>,
    //   },
    //   {
    //   path: '/invitacion/ubicacion',
    //   element: <Ubicacion/>,
    //   }
    // ]
  },
  {
    path: '/invitacion/regalos',
    element: <Regalos/>,
  },
  {
  path: '/invitacion/ubicacion',
  element: <Ubicacion/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },  
  {
    path: '/signup',
    element: <Signup/> 
  },
  {
    path: '/configuracion',
    element: <Configuracion/> 
  },
  {
    path: '/diseno',
    element: <Design/> 
  },
  {
    path: '/paginas',
    element: <Paginas/> 
  },
  {
    path: '/actividad',
    element: <Actividad/> 
  }

])

export default router