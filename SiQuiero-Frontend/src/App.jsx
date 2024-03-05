import { Outlet } from 'react-router-dom'
import './App.css'
// import Header from './components/Header'
import router from './router/index_router.jsx'
import {RouterProvider} from 'react-router-dom'
import { WeddingContext } from './Context/Wedding.js'
import { useState } from 'react'

function App() {
  const [wedding, setWedding] = useState([])

  return (
    <>
      <WeddingContext.Provider value={{wedding, setWedding}}>

        <RouterProvider router={router} />
      </WeddingContext.Provider>

    </>
  )
}

export default App
