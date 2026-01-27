const PostList = ({ posts, onDelete, onEdit }) => {

    return (

        <div className="space-y-4">

            {posts.map(post => (

                <div

                    key={post.id}

                    className="bg-white p-4 rounded shadow"

                >

                    <h2 className="font-bold">{post.title}</h2>

                    <p className="text-gray-600">{post.body}</p>

                    <div className="mt-3 space-x-2">

                        <button

                            onClick={() => onEdit(post)}

                            className="bg-yellow-400 px-3 py-1 rounded"

                        >

                            Edit

                        </button>

                        <button

                            onClick={() => onDelete(post.id)}

                            className="bg-red-500 text-white px-3 py-1 rounded"

                        >

                            Delete

                        </button>

                    </div>

                </div>

            ))}

        </div>

    )

}

export default PostList