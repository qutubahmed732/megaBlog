import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from "../appwrite/config.js";
import { Button, Container } from "../Interface/index.js";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            services.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        services.deletePost(post.$id).then((status) => {
            if (status) {
                services.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 border">
            <Container>
                <div className="w-full sm:w-1/2 mx-auto border rounded-xl overflow-hidden bg-slate-900">

                    {/* Image Section */}
                    <div className="relative">
                        <div className="w-full h-[500px]">   {/* Image height fixed */}
                            <img
                                width={20}
                                height={20}
                                src={services.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex gap-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500">Edit</Button>
                                </Link>

                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="text-white p-4">
                        <h1 className="text-xl font-bold mb-2">{post.title}</h1>

                        <div className="browser-css text-sm">
                            {parse(post.content)}
                        </div>
                    </div>

                </div>
            </Container>
        </div>

    ) : null;
}