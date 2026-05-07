import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Doctors from "./pages/Doctors.jsx";
import BookAppointment from "./pages/BookAppointment.jsx";
import History from "./pages/History.jsx";

import MainLayout from "./layout/MainLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/history" element={<History />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;