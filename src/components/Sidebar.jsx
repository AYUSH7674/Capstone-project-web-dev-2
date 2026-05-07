import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-64 min-h-screen bg-blue-900 text-white">

      <h2 className="text-xl font-bold p-5 border-b border-blue-700">

        Patient Panel

      </h2>

      <nav className="p-4 space-y-2">

        <Link
          to="/dashboard"
          className="block py-2 px-4 hover:bg-blue-700 rounded transition"
        >
          Dashboard
        </Link>

        <Link
          to="/doctors"
          className="block py-2 px-4 hover:bg-blue-700 rounded transition"
        >
          Doctors
        </Link>

        <Link
          to="/book"
          className="block py-2 px-4 hover:bg-blue-700 rounded transition"
        >
          Book Appointment
        </Link>

        <Link
          to="/history"
          className="block py-2 px-4 hover:bg-blue-700 rounded transition"
        >
          Appointment History
        </Link>

      </nav>

    </div>

  );

}

export default Sidebar;