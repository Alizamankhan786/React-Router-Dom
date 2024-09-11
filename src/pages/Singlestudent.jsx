import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Singlestudent = () => {

  const[data , setData] = useState(null);

  const {id} = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then((res) => {
    console.log(res)
    setData(res)
    }).catch((err) => {
    console.log(err);
    });

  } , [])




  return (

    <>

    <h1 style={{
      textAlign: "center"
    }}>SingleStudent {id}</h1>

    <h2>{data ? data.name : "LOADING..."}</h2>
    </>
  )
}

export default Singlestudent