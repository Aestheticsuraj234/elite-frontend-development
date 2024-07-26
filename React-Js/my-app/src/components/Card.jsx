import React from 'react'
import H2 from './H2'

 const Card = ({imageUrl , Title}) => {
  return (
    <div>
        <img src={imageUrl} alt={Title} height={200} width={400} />
       <H2 title={Title}/>
    </div>
  )
}



export default Card;