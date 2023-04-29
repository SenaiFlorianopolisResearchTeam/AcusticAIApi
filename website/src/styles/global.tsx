import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    html {
        box-sizing: border-box;
    }
`

const StyleGlobals = ({ children }: {children: any}) => {
    return(
        <>
            <Globalstyles/>
            {children}
        </>
    )
}

export default StyleGlobals;