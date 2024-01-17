import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index.js";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/auth/login", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          dispatch(
            setLogin({
              user: response.data.user,
              token: response.data.token,
            })
          );
          navigate("/home");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h1 className="text-cyan-500 font-bold text-2xl flex justify-center bg-white py-4 ">
        Sociopedia
      </h1>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" style={{animation: "pulsateCircle 2s ease-in-out infinite"}}>
    <style>
      {`
        @keyframes pulsateCircle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}
    </style>
    <path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM176,72V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72A16,16,0,0,1,96,56h64A16,16,0,0,1,176,72Zm-16,0H96V224h64Z"></path>
  </svg>




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
