import React from 'react'
import { useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';

const EditPost = ({posts , handelEdit , editTitle,setEditTitle,editGithubLink,setEditGithubLink,editBody,setEditBody}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditGithubLink(post.githubLink)
            setEditBody(post.body)
        }
    },[post,setEditTitle,setEditGithubLink,setEditBody])
  return (
    <main className='Newpost'>
        {
            editTitle &&

        <>
        <h2>Edit WebApp info</h2>
        <form className='newAppForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle'>Title</label>
            <input
                id='postTitle'
                type="text"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='postGithubLink'>GitHub Link</label>
            <input
                id='postgithublink'
                type="text"
                required
                value={editGithubLink}
                onChange={(e) => setEditGithubLink(e.target.value)}
            />
            <label htmlFor='postBody'>Description</label>
            <textarea
                id='postBody'
                type="text"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
            />
            <button type='submit' onClick={()=>handelEdit(post.id)}>Save</button>
        </form>
        </>
        }
        {
            !editTitle && 
            <>
                    <h2>
                        Web App Not Found
                    </h2>
                    <p>
                        <Link to ='/' className='Links'>
                            Back to Home Page
                        </Link>
                    </p>
            </>
        }
    </main>
  )
}

export default EditPost