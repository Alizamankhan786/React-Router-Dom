import React from 'react'

const About = () => {
  return (
    <>
    <h1 style={{
      marginLeft: "20px"
    }}>About</h1>
    <br />

    <div style={{
      display: `flex`,
      gap: "20px",
    }}>
    <button className='btn btn-primary' link to="">Person 1</button>
    <button className='btn btn-primary' link to="person 2">Person 2</button>
    <button className='btn btn-primary' link to="person 3">Person 3</button>
    </div>
    </>


  )
}

export default About