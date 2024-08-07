import React, { useContext } from 'react'
import Two from './Two'
import { GlobalContext } from '@/context/GlobalContext'

const One = ({greeting}) => {
  const {greeting:New} = useContext(GlobalContext);
  return (
    <div>
        <Two greeting={greeting}/>
        <p>
          {New}
        </p>
    </div>
  )
}

export default One