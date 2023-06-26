import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search ,setSearch}) => {
  return (
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'> Search WebApps </label>
            <input 
            id="search" 
            type='text' 
            placeholder='search webapps' 
            value={search} onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <ul className='Links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav