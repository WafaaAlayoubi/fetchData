import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react'
import Posts from './components/Posts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function App() {

  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    
    const getPosts = async () => {
      try{

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data[0].title);
        console.log(response.data);
        setPosts(response.data);
        setStatus("idle");

      }catch(error){
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
    {status === "loading" ?  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> : <Posts posts={posts}/>}
    
    </>
  );
}

export default App;
