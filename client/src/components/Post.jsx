import img from "../assets/OIP.jpg";

function Post() {
  return (
    <div
      className="bg-white
    w-3/12 py-6 my-6 mx-20 rounded-lg"
    >
      <div className="flex items-center gap-6 px-4 pb-4 border-solid border-gray-300 border-b">
        {" "}
        <img
          className="w-10 h-10 object-cover rounded-full "
          src={img}
          alt=""
        />
        <input
          className="bg-gray-200 px-4 py-3 rounded-full text-sm"
          type="text"
          name=""
          placeholder="what's on your mind..."
          id=""
        />
      </div>
      <div></div>
    </div>
  );
}

export default Post;
