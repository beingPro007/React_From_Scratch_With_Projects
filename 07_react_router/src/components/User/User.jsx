import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams();
  return (
    <div className='p-3 m-3 text-xl bg-gray-500'>{userId}</div>
  )
}

export default User