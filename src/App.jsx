import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuItems from './MenuItems'
import MenuItem from './MenuItem'
import Input from './InputItem'
import Tabs from './Tabs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <MenuItems />     */}
       <MenuItem />
       <Input />
       <Tabs />
    </>
  )
}

export default App
