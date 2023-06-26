import React from 'react'

const Newpost = ({ handelSubmit, postTitle, setPostTitle, postGithubLink, setPostGithubLink, postBody, setPostBody }) => {
  return (
    <main className='Newpost'>
        <h2>Post New WebApp</h2>
        <form className='newAppForm' onSubmit={handelSubmit}>
            <label htmlFor='postTitle'>Title</label>
            <input
                id='postTitle'
                type="text"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor='postGithubLink'>GitHub Link</label>
            <input
                id='postgithublink'
                type="text"
                required
                value={postGithubLink}
                onChange={(e) => setPostGithubLink(e.target.value)}
            />
            <label htmlFor='postBody'>Description</label>
            <textarea
                id='postBody'
                type="text"
                required
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
            />
            <button type='submit'> Submit</button>
        </form>
    </main>
  )
}

export default Newpost