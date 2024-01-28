import img from "../assets/OIP.jpg";

function FriendList() {
  return (
    <div className="bg-slate-950 py-6 my-6 rounded-xl px-6">
      <h1 className="font-medium text-white">Friend List</h1>{" "}
      <div className="flex items-center gap-4  justify-between pt-6">
        <div className="flex gap-4">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={img}
            alt=""
          />
          <div>
            <h1 className="font-medium text-white">Shreyas M S</h1>
            <h2 className="text-xs text-gray-500 text-white">Educator</h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
          className="w-8"
        >
          <path d="M168,56a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.66,79.66,0,0,1,36.06,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default FriendList;
