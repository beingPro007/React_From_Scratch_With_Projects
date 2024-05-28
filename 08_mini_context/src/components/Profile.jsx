import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return <p>Please Login</p>
    }else{
        return <p>Welcome {user.username}</p>
    }
  return (
    <div>Profile</div>
  )
}

export default Profile