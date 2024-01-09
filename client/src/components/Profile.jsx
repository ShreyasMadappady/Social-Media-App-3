import img from "../assets/OIP.jpg";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

function Profile() {
  return (
    <div className="bg-white w-3/12 py-6 my-6 mx-20 rounded-xl">
      <div className="flex items-center px-4 pb-4  justify-between border-solid border-gray-300 border-b">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={img}
            alt=""
          />
          <div>
            <h1 className="font-medium">Shreyas M S</h1>
            <h2 className="text-xs">0 Friends</h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          className="w-6"
        >
          <path d="M228.25,63.07l-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,0,0-8-13.86l-4.67,2.7A23.92,23.92,0,0,0,208,33.38V28a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,4,14.93,7.92,7.92,0,0,0,4-1.07l4.67-2.7A23.92,23.92,0,0,0,192,78.62V84a8,8,0,0,0,16,0V78.62a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM200,64a8,8,0,1,1,8-8A8,8,0,0,1,200,64ZM128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm102.56,34.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.81,59.81,0,0,0,78.27,0,4,4,0,0,1,4.84-.32,79.86,79.86,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64Z"></path>
        </svg>
      </div>

      <div className="border-solid border-gray-300 border-b">
        <div className="flex items-center px-4 pt-4 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
          </svg>
          <h1 className="text-sm text-gray-500">fake Location</h1>
        </div>
        <div className="flex items-center px-4 pb-4 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Z"></path>
          </svg>
          <h1 className="text-sm text-gray-500">fake Occupation</h1>
        </div>
      </div>
      <div className="border-solid border-gray-300 border-b">
        <div className="flex items-center px-4 py-4 justify-between">
          <h1 className="text-sm text-gray-500">Who's veiwed your profile</h1>
          <h2 className="font-medium text-sm">12345</h2>
        </div>
        <div className="flex items-center px-4  pb-4 justify-between">
          <h1 className="text-sm text-gray-500">Impressions of your post</h1>
          <h2 className="font-medium text-sm">54321</h2>
        </div>
      </div>
      <div className="px-4">
        <h1 className="py-4 font-medium">Social Profiles</h1>
        <div className="flex items-center justify-between items-center pb-4">
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src={twitter} alt="" />
            <div>
              <h1 className="text-base font-medium">Twitter</h1>
              <h2 className="text-sm text-gray-500">Social network</h2>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160l90.35-90.35,16.68,16.69L68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188l90.35-90.35h0l16.68,16.69Z"></path>
          </svg>
        </div>
        <div className="flex items-center justify-between items-center">
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src={linkedin} alt="" />{" "}
            <div>
              <h1 className="text-base font-medium">Linkedin</h1>
              <h2 className="text-sm text-gray-500">Network Platform</h2>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160l90.35-90.35,16.68,16.69L68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188l90.35-90.35h0l16.68,16.69Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Profile;
