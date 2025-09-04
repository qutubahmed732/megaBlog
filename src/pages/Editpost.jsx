import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components/index.js'
import services from '../appwrite/config.js'
import { useParams, useNavigate } from 'react-router-dom'

function Editpost() {

    const [post, setpost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            services.getPost(slug).then((post) => {
                if (post) {
                    setpost(post)
                }
            })
        } else {
            navigate("/")
        }
    }, [])

    return post ? (
        <div className='py-8 '>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default Editpost