import React from 'react'
import {useParams ,Link} from 'react-router-dom'
const PostPage = ({posts,handelDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'>
        <article className='post'>
            {post && 
                <>
                    <h2>
                        {post.title}
                    </h2>
                    <Link to={post.githublink} className='postGithub'>
                        View Code
                    </Link>
                    <p className='postBody'>{post.body}</p>
                    <Link to={`/edit/${post.id}`}>
                        <button className="Edit">
                            Edit info
                        </button>
                    </Link>
                    <button onClick={() => handelDelete(post.id)} className='Delete'> Delete WebApp</button>
                </>
            }
            {!post && 
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
            {!post && 
                <>
                    <h2>
                        Web App Doesn't Exist
                    </h2>
                    <p>
                        <Link to ='/' className='Links'>
                            Back to Home Page
                        </Link>
                    </p>
                </>
            }
        </article>
    </main>
  )
}

export default PostPage