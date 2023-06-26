import React from 'react'
import {Link} from 'react-router-dom'
const Missing = () => {
  return (
    <main className='Missing'>
        <h2>
          Page Not Found
        </h2>
        <p>Sorry 😔</p>
        <Link to ='/' className='Links'>
           Back to Home Page
       </Link>
    </main>
  )
}

export default Missing