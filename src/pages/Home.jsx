import { Container } from "../components/index"
import Random from './Random.jsx'

function Home() {
  
  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <Random />
        </div>
      </Container>
    </div>
  )
}
// }

export default Home;