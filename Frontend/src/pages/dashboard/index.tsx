import { useCookies } from "@/hooks/useCookies"

const Dashboard = () => {

    const { refreshAuthCookie } = useCookies()

    return (
        <>
            <button onClick={() => refreshAuthCookie()}> refresh </button>
        </>
    )
}

export default Dashboard