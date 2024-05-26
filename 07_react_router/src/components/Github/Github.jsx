import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/beingPro007').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='m-4 text-3xl text-center text-white bg-slate-950'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="" className='flex justify-center align-middle'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/beingPro007')
    return response.json()
}