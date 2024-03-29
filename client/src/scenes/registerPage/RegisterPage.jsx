import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [picturePath, setPicturePath] = useState(null);
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("picturePath", picturePath);
    formData.append("friends", [1]);
    formData.append("location", location);
    formData.append("occupation", occupation);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    e.preventDefault();

    const setData = await axios.post(
      "http://localhost:3001/auth/register",
      formData
    );
    console.log(setData);
    if (setData) {
      navigate("/");
    }
    // console.log(setData);
  };

  return (
    <div>
      <h1 className="text-cyan-500 font-bold text-2xl flex justify-center bg-white py-4 ">
        Sociopedia
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col w-3/6 mx-auto bg-white p-5 my-6 rounded-xl"
        encType="multipart/form-data"
      >
        <h1 className=" text-black font-medium">
          Welcome to Sociopedia, the Social Media for Sociopath
        </h1>
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="FirstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="LastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="file"
          placeholder="Add picture here"
          onChange={(e) => {
            setPicturePath(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Occupation"
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
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
          Register
        </button>
        <h2
          className="text-cyan-500 mt-7 text-sm"
          onClick={() => {
            navigate("/");
          }}
        >
          Already have an account?, Login here.
        </h2>
      </form>
    </div>
  );
}

export default RegisterPage;
