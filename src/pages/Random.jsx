import React, { useEffect, useState } from 'react'
import { getPosts } from '../store/features/postSlice'
import { useSelector, useDispatch } from 'react-redux'
import services from '../appwrite/config';
import { Postcard } from '../components/index';

function Random() {

    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state.post.allPosts);

    useEffect(() => {
        services.getPosts([])
            .then((post) => {
                if (post) {
                    dispatch(getPosts(post.documents))
                }
            })
    }, [])

    console.log(allPosts)


    return (
        <div>
            {allPosts.map(post => (
              <div className='p-2 w-full' key={post.$id}>
                <Postcard {...post} />
              </div>
            ))}

        </div>
    )
}

export default Random