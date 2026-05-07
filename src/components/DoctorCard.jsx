import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold">

        {doctor.name}

      </h2>

      <p className="text-gray-600">

        {doctor.specialization}

      </p>

      <p className="text-gray-500 mt-2">

        Experience: {doctor.experience}

      </p>

      <p className="text-gray-500">

        Time: {doctor.time}

      </p>

      <Link
        to="/book"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >

        Book Appointment

      </Link>

    </div>

  );

}

export default DoctorCard;