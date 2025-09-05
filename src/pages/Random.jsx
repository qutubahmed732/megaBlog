import { useEffect } from 'react'
import { getPosts } from '../store/features/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import services from '../appwrite/config';
import { Postcard } from '../components/index';
import { Container } from '../components/index';

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
        {posts.map(post => (
          <div className='p-2 w-full' key={post.$id}>
            <Postcard {...post} />
          </div>
        ))}
      </div>
    )
  }
}

export default Random;