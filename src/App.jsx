import { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './components/layout'
import './style/style.scss'
import './App.css'
import Home from './pages/home'
import Error from './pages/error'
import Contact from './pages/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
