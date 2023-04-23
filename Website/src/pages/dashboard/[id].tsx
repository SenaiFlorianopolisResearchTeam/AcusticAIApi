import { useRouter } from 'next/router'

export default function Livro() {
  const router = useRouter()
  const { id } = router.query
  const data = [
    { 
        id: "12345647",
        session: "secao 1"
    },
    {
        id: "12345432647",
        session: "secao 2"
    }
  ]
  const session = data.find(item => item.id === id)?.session

  return (
    <div>
      {session ? (
        <h1>A sessão correspondente ao ID {id} é: {session}</h1>
      ) : (
        <h1>Nenhuma sessão encontrada para o ID {id}</h1>
      )}
    </div>
  )
}