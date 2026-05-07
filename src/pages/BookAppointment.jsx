import { useState } from "react";

function BookAppointment() {

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Booked Successfully!");

    setForm({
      patient: "",
      doctor: "",
      date: "",
      time: ""
    });
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Book Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-lg"
      >

        {/* Patient Name */}
        <input
          type="text"
          name="patient"
          placeholder="Patient Name"
          value={form.patient}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        {/* Doctor Name */}
        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={form.doctor}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />

        {/* Time */}
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full border p-2 mb-6 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>

      </form>

    </div>
  );
}

export default BookAppointment;