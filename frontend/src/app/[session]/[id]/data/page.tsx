"use client"

import { NextPage } from "next"
import { useState, useEffect } from "react"

const Page: NextPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 10000)

    // Limpar o timer se o componente for desmontado antes do tempo
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        // Se ainda estiver carregando, mostra o componente de loading
        <div>Loading...</div>
      ) : (
        // Quando o loading acabar, mostra o conteúdo da página
        <div>
          {/* Seu conteúdo aqui */}
        </div>
      )}
    </div>
  )
}

export default Page
