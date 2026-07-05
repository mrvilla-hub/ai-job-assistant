import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="p-8 bg-gray-100 min-h-screen">

                    {children}

                </main>

            </div>

        </div>
    )
}