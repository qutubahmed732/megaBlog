import { useState, useEffect } from "react"
import { Container, Postcard } from "../components"
import services from "../appwrite/config"

function AllPosts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        services.getPosts([]).then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        }).catch((e) => console.log(e.message))
    }, [])
    console.log(posts)

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts