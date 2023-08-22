"use client"

import CardSession from "../../components/cardSession"
import { NextComponentType } from "next"

const Dashboard: NextComponentType = () => {
  return (
    <main>
      <CardSession name="sessao1" id="1" data={[1,2,3,4,5,6]}/>
    </main>
  )
}

export default Dashboard