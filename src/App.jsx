
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks'
import Cards from './Components/Cards'

function App() {
  const [cart,setCart] = useState([])
  const handleGetTitle = (Card) =>{
    const NewCart = [...cart,Card];
    setCart(NewCart)
  }
  return (
    <>
    <section className='bg-gray-200'>

      <div className='w-[90%] m-auto '>
      <h1 className='text-5xl font-bold text-center py-5'>Course Registration</h1>
      <div className='lg:flex gap-3'>
        <div className='lg:w-3/4'>
      <Cards
      handleGetTitle={handleGetTitle}
      ></Cards>
        </div>
        <div className='lg:w-1/4'>
      <Bookmarks
      cart={cart}
      ></Bookmarks>
        </div>
      </div>
      </div>
    </section>
      
      
    </>
  )
}

export default App
