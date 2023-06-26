import React from 'react'
import Feed from './Feed'
const Home = ({posts}) => {
  return (
    <main className='Home'>
        {posts.length ?( 
            <Feed posts = {posts} className="Feed"/>
        ) : (<p style={{marginTop:"2rem"}}> No Web Apps to show 😔</p>) }
    </main>
  )
}

export default Home