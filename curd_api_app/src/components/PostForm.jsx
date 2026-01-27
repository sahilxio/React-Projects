import { useEffect, useState } from 'react'



const PostForm = ({ addPost, editPost, updatePost }) => {

  const [title, setTitle] = useState('')

  const [body, setBody] = useState('')



  useEffect(() => {

    if (editPost) {

      setTitle(editPost.title)

      setBody(editPost.body)

    }

  }, [editPost])



  function handleSubmit(e) {

    e.preventDefault()



    if (editPost) {

      updatePost({

        ...editPost,

        title,

        body

      })

    } else {

      addPost({

        id: Date.now(),

        title,

        body

      })

    }



    setTitle('')

    setBody('')

  }



  return (

    <form

      onSubmit={handleSubmit}

      className="bg-white p-4 rounded shadow mb-6"

    >

      <input

        className="border p-2 w-full mb-2"

        placeholder="Title"

        value={title}

        onChange={e => setTitle(e.target.value)}

      />



      <textarea

        className="border p-2 w-full mb-2"

        placeholder="Body"

        value={body}

        onChange={e => setBody(e.target.value)}

      />



      <button className="bg-blue-500 text-white px-4 py-2 rounded">

        {editPost ? 'Update Post' : 'Add Post'}

      </button>

    </form>

  )

}



export default PostForm