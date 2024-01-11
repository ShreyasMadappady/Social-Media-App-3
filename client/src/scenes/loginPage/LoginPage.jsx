import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = await axios.post(
      "http://localhost:3001/auth/login",
      formData
    );
    const dat = await loginData.datal
    console.log(dat)
  };

  return (
    <div>
      <h1 className="text-cyan-500 font-bold text-2xl flex justify-center bg-white py-4 ">
        Sociopedia
      </h1>
      <form className="flex justify-center flex-col w-3/6 mx-auto bg-white p-5 my-6 rounded-xl">
        <h1 className=" text-black font-medium">
          Welcome to Sociopedia, the Social Media for Sociopath
        </h1>
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border-2 my-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-cyan-500 text-white py-3 rounded-md"
          onClick={handleSubmit}
        >
          Login
        </button>
        <h2
          className="text-cyan-500 mt-7 text-sm"
          onClick={() => {
            navigate("/register");
          }}
        >
          Don't have an account?, Sign Up here
        </h2>
      </form>
    </div>
  );
}

export default LoginPage;
