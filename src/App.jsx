import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { DataContext } from './contexts/DataContext';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Posts from './pages/Posts';
import Post from './pages/Post';
import AddPost from './pages/AddPost';


const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
const postsEndPoint = "/posts/"


function App() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    getData()
  }, []);

  function getData() {
    axios.get(`${apiUrl}${postsEndPoint}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("API called");
      })
  }
  return (
    <>
      <DataContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/about' Component={AboutUs} />
              <Route path='/posts'>
                <Route index Component={Posts} />
                <Route path=':id' Component={Post} />
              </Route>
              <Route path="/create" Component={AddPost} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider >
    </>
  )
}

export default App;
