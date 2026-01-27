import { useEffect, useState } from 'react'

import PostForm from './components/PostForm'

import PostList from './components/PostList'



const App = () => {

  const [posts, setPosts] = useState([])

  const [editPost, setEditPost] = useState(null)



  // READ

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

      .then(res => res.json())

      .then(data => setPosts(data))

  }, [])



  // CREATE

  function addPost(post) {

    setPosts([post, ...posts])

  }



  // DELETE

  function deletePost(id) {

    setPosts(posts.filter(post => post.id !== id))

  }



  // UPDATE

  function updatePost(updatedPost) {

    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post))

    setEditPost(null)

  }



  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">

        CRUD App with API

      </h1>



      <PostForm

        addPost={addPost}

        editPost={editPost}

        updatePost={updatePost}

      />



      <PostList

        posts={posts}
s
        onDelete={deletePost}

        onEdit={setEditPost}

      />

    </div>

  )

}



export default App