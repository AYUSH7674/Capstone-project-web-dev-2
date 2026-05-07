function Dashboard() {

  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">

        Patient Dashboard

      </h1>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-gray-500">

            Upcoming Appointments

          </h2>

          <p className="text-3xl font-bold text-blue-600 mt-2">

            2

          </p>

        </div>

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-gray-500">

            Doctors Available

          </h2>

          <p className="text-3xl font-bold text-green-600 mt-2">

            10

          </p>

        </div>

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-gray-500">

            Total Visits

          </h2>

          <p className="text-3xl font-bold text-purple-600 mt-2">

            5

          </p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;