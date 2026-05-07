import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Navbar />

        <div className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default MainLayout;