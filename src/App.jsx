import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import { BrowserRouter, Routes, Route } from "react-router";
import Rootlayout from './components/layout/Rootlayout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Rootlayout/>}>
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        </Route>
       
      </Routes>

    </>
  )
}

export default App
