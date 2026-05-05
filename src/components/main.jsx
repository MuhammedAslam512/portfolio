import React from 'react'
import { useEffect, useState } from 'react'

function main() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData()  {
            const response = await fetch ("")
            const data = await response.json();
            setPosts(data)
        }
        fetchData()
    },[])
  return (
    <div>
      
      {posts.map(posts => {
        <p key={posts.id}>{posts.title}</p>
      })}
    </div>
  )
}

export default main
