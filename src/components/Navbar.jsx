function Navbar() {

  return (

    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-blue-600">
        Healthcare System
      </h1>

      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>

    </div>

  );

}

export default Navbar;