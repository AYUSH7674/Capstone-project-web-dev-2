import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    navigate("/dashboard");

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-blue-100">

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">

          Patient Login

        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;