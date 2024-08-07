
import { GlobalContext } from '@/context/GlobalContext'
import React , {useContext} from 'react'

const Three = ({greeting}) => {

  const {greeting:New} = useContext(GlobalContext)
   
  return (
    <div>
        <h1 className='text-3xl'>
          {greeting}
        </h1>

        <p>{New}</p>
    </div>
  )
}

export default Three