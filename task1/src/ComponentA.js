import React from 'react'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import './App.css'
const ComponentA = () => {
  return (
    <div className='app'>
      <ComponentB/>
      <ComponentC/>
    </div>
  )
}

export default ComponentA
