import React from 'react'

const Fotter = () => {
  const today = new Date();
  return (
    <footer className='Footer'>
      <p>
        My Web Apps &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Fotter