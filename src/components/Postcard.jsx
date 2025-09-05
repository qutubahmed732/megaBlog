import services from "../appwrite/config.js";
import { Link } from 'react-router-dom';
import parse from "html-react-parser"

function Postcard({ $id, title, featuredImage, content }) {
  console.log()
  return (
    <>
      <Link to={`/post/${$id}`} className="scale-50 hover:scale-200">
        <div className='w-full bg-gray-100 rounded-xl p-10 h-[40vh]'>
          <div className='w-full justify-center mb-4 h-[80%]'>
            <img className='rounded-xl h-full w-full object-cover' src={services.getFilePreview(featuredImage)} alt={title} />
          </div>
          <h2 className='text-xl font-bold'>{title}</h2>
          {parse(content)}
        </div>
      </Link>
    </>
  )
}

export default Postcard