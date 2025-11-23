import { Container } from "../Interface/index.js";
import Random from "./Random.jsx"

function AllPosts() {

  return (
    <div className="w-full py-8">
      <Container>
        <div className="px-10 flex justify-center gap-5">
          <Random />
        </div>
      </Container>
    </div>
  )
}

export default AllPosts