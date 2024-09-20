import React from 'react'
import {useSelector} from 'react-redux'

const navBar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <p>I'm navbar and value of count is {count} </p>
    </div>
  )
}

export default navBar


// Bravooo! I have learn redux