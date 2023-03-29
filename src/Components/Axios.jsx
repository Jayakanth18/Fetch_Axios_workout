import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Axios() {
    const [post ,setPost] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setPost(response.data))
        .catch(error => console.log(error))
    },[])

  return (
    <div>
        <h1>Axios</h1>
        <ul>
            {
                post.map(data => <li key={data.id} >{data.title}</li>)
            }
        </ul>
    </div>
  )
}

export default Axios