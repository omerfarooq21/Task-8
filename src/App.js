import './styles.css';
import Header from './Header';
import Nav from './Nav';
import Fotter from './Fotter';
import Newpost from './Newpost';
import PostPage from './PostPage';
import Missing from './Missing';
import Home from './Home';
import About from './About';
import EditPost from './EditPost';
import {Route , Routes , useNavigate} from  'react-router-dom';
import {useState, useEffect} from 'react'
import api from './api/post';
function App() {
  const [search,setSearch] = useState([])
  const [posts,setPosts] = useState([]);

  const  [postTitle,setPostTitle] = useState('');
  const  [postGithubLink,setPostGithubLink] = useState('');
  const  [postBody,setPostBody] = useState('');
  
  const  [editTitle,setEditTitle] = useState('');
  const  [editGithubLink,setEditGithubLink] = useState('');
  const  [editBody,setEditBody] = useState('');
  const navigate = useNavigate();

  const handelSubmit = async (e) =>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length]-1 .id + 1 : 1;
    const newPost = {id, title:postTitle ,githublink:postGithubLink, body:postBody};
    try{
      // const responese = api.post('/posts',newPost)
      const response = await api.post('/posts', newPost);
      const allPost = [...posts,response.data];
      setPosts(allPost);
      setPostTitle('');
      setPostGithubLink('');
      setPostBody('');
      navigate('/'); 
    }catch(err){
      console.log(`Error : ${err.message}`);
    }
  }

  const [searchResults,setSearchResults] = useState([]);
  const handelDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`)
      const postList = posts.filter(post => post.id !== id);
      setPosts(postList);
      navigate('/');
    }catch(err){
      console.log(`Error : ${err.message}`);
    }
  }
  const handelEdit = async (id) =>{
    const updatedPost = {id, title:editTitle ,githublink:editGithubLink, body:editBody};
    try{
        const respones = await api.put(`/posts/${id}`,updatedPost);
        setPosts(posts.map(post => post.id ===id ? {...respones.data} : post ));
        setEditTitle('');
        setEditGithubLink('');
        setEditBody('');
        navigate('/')
    }catch(err){
      console.log(`Error : ${err.message}`);
    }
  }
  useEffect(()=>{
    const filteredResults = posts.filter(post =>((post.title).toString().toLowerCase()).includes(search.toString().toLowerCase())||((post.body).toString().toLowerCase()).includes(search.toString().toLowerCase()));
    setSearchResults(filteredResults.reverse());
  },[posts,search])

  useEffect(()=>{
    const fetchPosts = async () =>{
      try{
        const respones = await api.get('/posts');
        setPosts(respones.data);
      }catch(err){
          if(err.message){
            console.log(err.respones.data)
            console.log(err.respones.status)
            console.log(err.respones.headers)
          }
      }
    }
    fetchPosts()
  },[])
  return (
    <div className="App">
      <Header title="My Web Apps"/>
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults || []}/>}/>
        <Route exact path="/post" element={<Newpost 
                                            handelSubmit={handelSubmit} 
                                            postTitle={postTitle} 
                                            setPostTitle={setPostTitle} 
                                            postGithubLink = {postGithubLink}
                                            setPostGithubLink ={setPostGithubLink}
                                            postBody={postBody} 
                                            setPostBody={setPostBody} />}/>
        <Route  path="/edit/:id" element={<EditPost 
                                            posts = {posts}
                                            handelEdit={handelEdit} 
                                            editTitle={editTitle} 
                                            setEditTitle={setEditTitle} 
                                            editGithubLink = {editGithubLink}
                                            setEditGithubLink ={setEditGithubLink}
                                            editBody={editBody} 
                                            setEditBody={setEditBody} />}/>
        <Route path="/post/:id" element={<PostPage posts={posts} handelDelete={handelDelete}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;
