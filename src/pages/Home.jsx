import React, { useEffect, useState } from 'react'
import services from '../appwrite/config.js'
import { Container, Postcard } from "../components/index"
import Random from './Random.jsx'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    services.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents)
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
      <div className='w-full py-8'>
        <Container>
          <div className="flex flex-wrap">
            {posts.map(post => (
              <div className='p-2 w-full' key={post.$id}>
                <Postcard {...post} />
              </div>
            ))}
          </div>
          {/* <Random /> */}
        </Container>
      </div>
    )
  }
}

export default Home;