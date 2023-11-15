import { useState } from 'react'
import Navbar from './Nav/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
     <Navbar/>
     <div className='bg-black h-[100vh]'>

     </div>
    </div>
      
    </>
  )
}

export default App
