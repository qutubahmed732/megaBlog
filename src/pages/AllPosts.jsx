import { Container } from "../components"
import Random from "./Random"

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