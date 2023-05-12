import React from 'react'
import { useSelector  } from 'react-redux';
const ComponentC = () => {
  const myState = useSelector((state)=>state.changeName);
  return (
    <div>
      <h2>Component C</h2>
      <h3 style={{fontSize:"1.6em"}}>{myState.name}</h3>
    </div>
  )
}

export default ComponentC;
