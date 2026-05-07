import AppointmentCard from "../components/AppointmentCard";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Rahul Sharma",
    patient: "Amit Verma",
    date: "2026-05-10",
    time: "10:00 AM"
  },
  {
    id: 2,
    doctor: "Dr. Ayesha Khan",
    patient: "Riya Sharma",
    date: "2026-05-12",
    time: "1:30 PM"
  },
  {
    id: 3,
    doctor: "Dr. Amit Verma",
    patient: "Rohit Singh",
    date: "2026-05-15",
    time: "3:00 PM"
  }
];

function History() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Appointment History
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          />
        ))}

      </div>

    </div>
  );
}

export default History;