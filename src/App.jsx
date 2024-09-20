
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counter/counterSlice'

import Navbar from './components/Navbar'


function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     The value of count is {count}
    </>
  )
}

export default App
