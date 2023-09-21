import Navbar from "../../../components/navbar/navbar";
import { NavbarProvider } from "../../../context/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    icons: '/logo.ico',
    title: 'AcustticAI - dashboard',
    description: '...',
}

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <> 
            <Navbar/>
            <NavbarProvider>
                {children}
            </NavbarProvider>
        </>
    );
};

export default Layout;