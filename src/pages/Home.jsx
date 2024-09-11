import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [data , setData] = useState(null);

  // USENAVIGATE

  const navigate = useNavigate()

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then((res ) => {
      console.log(res);
      setData(res)
    }) .catch((err) => {
      console.log(err);
      
    })

  } , [])

  const singleUser = (item) => {
    navigate(`singleStudent/:${item.id}`)
  }



  return (
    <>
    <h1 className='text-center'>Hello Students</h1>
      {
        data ? data.map((item) =>{
          return(
            <div key={item.id} style={{
              border: "1px solid black",
              margin: "20px",
              padding: "20px"
            }}>
              <h2>{item.name}</h2>
              <h2>{item.username}</h2>
              <button className='btn btn-primary' onClick={() => singleUser(item)}>SHOW MORE</button>
              </div>
          )

        }): <h1>LOADING...</h1>
      }
    </>
  )
}

export default Home