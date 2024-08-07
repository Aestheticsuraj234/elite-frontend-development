import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className="h-screen text-3xl text-orange-700">
        <h1 className="text-center pt-10">
            User {id}
        </h1>
    </div>
  )
}

export default User