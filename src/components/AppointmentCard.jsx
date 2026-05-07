function AppointmentCard({ appointment }) {
  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-lg font-semibold mb-2">
        {appointment.doctor}
      </h2>

      <p className="text-gray-600">
        Patient: {appointment.patient}
      </p>

      <p className="text-gray-500 mt-1">
        Date: {appointment.date}
      </p>

      <p className="text-gray-500">
        Time: {appointment.time}
      </p>

      <span className="inline-block mt-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
        Confirmed
      </span>

    </div>
  );
}

export default AppointmentCard;