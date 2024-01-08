function loginPage() {
  return (
    <div>
      <h1 className="text-cyan-500 font-bold text-2xl flex justify-center bg-white py-4 ">
        Sociodia
      </h1>
      {/* <div className="flex justify-center flex-col w-3/6 mx-auto bg-white p-5 my-6 rounded-xl">
        <h1 className=" text-black font-medium">
          Welcome to Sociopedia, the Social Media for Sociopath
        </h1>
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          className="border-2 my-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Password"
        />
        <button className="bg-cyan-500 text-white py-3 rounded-md">
          Login
        </button>
        <h2 className="text-cyan-500 mt-7 text-sm">
          Don't have an account?, Sign Up here
        </h2>
      </div> */}
      <div className="flex justify-center flex-col w-3/6 mx-auto bg-white p-5 my-6 rounded-xl">
        <h1 className=" text-black font-medium">
          Welcome to Sociopedia, the Social Media for Sociopath
        </h1>
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="FirstName"
        />
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="LastName"
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Location"
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Occupation"
        />{" "}
        <input
          className="border-2 mt-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Email"
        />{" "}
        <input
          className="border-2 my-7 py-2 px-2 rounded-md"
          type="text"
          placeholder="Password"
        />
        <button className="bg-cyan-500 text-white py-3 rounded-md">
          Register
        </button>
        <h2 className="text-cyan-500 mt-7 text-sm">
          Already have an account?, Login here.
        </h2>
      </div>
    </div>
  );
}

export default loginPage;
