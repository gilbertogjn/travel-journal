import './App.css';
import data from './data'
import Navbar from './components/Navbar';
import Post from './components/Post'
import { Fragment } from 'react';

function App() {
  const posts = data.map(info => {
    return (
      <Post
        key={info.id}
        {...info}
      />
    )
  })

  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        {posts}
      </div>
    </Fragment>
  )
}

export default App;
