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
            <div>
                {/* navbar session */}
            </div>
            {children}
        </>
    );
};

export default Layout;