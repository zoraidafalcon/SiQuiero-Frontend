import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Outlet/>
      <h1>Footer</h1>
    </>
  )
}

export default App
