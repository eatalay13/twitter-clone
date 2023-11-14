import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const MainLayout = () => {
    return (
        <div className="w-[1265px] mx-auto flex">
            <Sidebar />
            <main className="flex-1 border-x border-[#2f3336]">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
