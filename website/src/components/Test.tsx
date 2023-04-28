import { NextComponentType } from "next"
import { createUser, getHelloProps } from '@/graphql/trafficai';

const Test: NextComponentType = () => {

    const handle = async (name: string) => {
        try {
            const { props } = await getHelloProps(name);
            console.log(props.message)
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleCreate = async (username: string, email: string, password: string) => {
        try {
            const { props } = await createUser(username, email, password);
            console.log(props.message)
        } catch (error) {
            console.error(error);
        }
    }
  
    
    return(
        <div>
            <button onClick={ async () => await handle("gabriel2")}>hello</button>
            <button onClick={ async () => await handleCreate("gabriel2", "gabriel@fdsjf", "12345")}>create</button>
        </div>
    )
}

export default Test;