import img from "../assets/OIP.jpg";

function Post() {
  return (
    <div className="bg-white w-7/12 h-5/12 pt-6 mt-6  rounded-xl text-gray-600">
      <div className="flex items-center gap-6 px-6 pb-4 border-solid border-gray-300 border-b justify-between">
        <img
          className="w-12 h-12 object-cover rounded-full "
          src={img}
          alt=""
        />
        <input
          className="bg-gray-200 px-4 py-4 rounded-full text-sm w-full"
          type="text"
          name=""
          placeholder="what's on your mind..."
          id=""
        />
      </div>
      <div className="flex items-center justify-between  px-6 py-3 ">
        <div className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="rgb(111,118,131)"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z"></path>
          </svg>
          <h1>Image</h1>
        </div>{" "}
        <div className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="rgb(111,118,131)"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z"></path>
          </svg>
          <h1>Clip</h1>
        </div>{" "}
        <div className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="rgb(111,118,131)"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
          </svg>
          <h1>Attachment</h1>
        </div>{" "}
        <div className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="rgb(111,118,131)"
            viewBox="0 0 256 256"
            className="w-6"
          >
            <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path>
          </svg>
          <h1>Audio</h1>
        </div>{" "}
        <button className="bg-cyan-400 rounded-full px-6 py-2">Post </button>
      </div>
    </div>
  );
}

export default Post;
