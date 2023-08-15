import CardSession from "@/components/cardSession"
import { NextComponentType } from "next"

const Home: NextComponentType = () => {
  return (
    <main>
      <div>
        <CardSession id="1" name="Sessão 1" data={[1,2,3,4,5,6]}/>
      </div>
      <div>

      </div>
    </main>
  )
}

export default Home