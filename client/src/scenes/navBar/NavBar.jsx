function NavBar({ userName }) {
  return (
    <div className="flex justify-between py-6 px-20 bg-slate-950 ">
      <div className="flex gap-9">
        <h1 className="text-cyan-500 font-bold text-2xl">Sociopedia</h1>
        <div className="flex  bg-slate-200 px-4 py-1 rounded-md justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 text-xs"
          />
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"></path>
        </svg>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z"></path>
        </svg>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path>
        </svg>
        <div>
          <select
            className=" bg-slate-200  px-4 py-1 rounded-md "
            name=""
            id=""
            onClick={(e) => {
              console.log(e.target.value);
            }}
          >
            <option value="user">{userName}</option>
            <option value="log">Logout</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
