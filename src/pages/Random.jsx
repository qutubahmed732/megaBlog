import { useEffect } from 'react'
import { getPosts } from '../Redux-store/features/postSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import services from '../appwrite/config.js';
import { Postcard } from '../Interface/index.js';
import { Container } from '../Interface/index.js';

function Random() {

  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.post.allPosts);
  let posts = allPosts;

  useEffect(() => {
    services.getPosts([])
      .then((post) => {
        if (post) {
          dispatch(getPosts(post.documents))
        }
      })
  }, [])

  if (posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-700 max-w-xl mx-auto">
                No Posts Available
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  } else {

    return (
      <div className='flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {posts.map(post => (
            <div className='p-2 w-full' key={post.$id}>
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Random;