import DoctorCard from "../components/DoctorCard";
import doctors from "../data/doctors";

function Doctors() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Available Doctors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}

      </div>

    </div>
  );
}

export default Doctors;