import { ReactNode, createServerContext } from "react";

type ContextProps = { 
    children: ReactNode;
}

const Values ={  
    
}


export const AuthContext = createServerContext<any>(Values)

export const AuthProvider = ({ children }: ContextProps) => {



    return(
        <AuthContext.Provider value={{
 
            }}> 
            {children}
        </AuthContext.Provider>
    )
}