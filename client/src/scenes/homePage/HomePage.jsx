import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between   mx-28 gap-6">
        <div className="w-4/12">
          {" "}
          <Profile />
        </div>

        <div className="flex flex-col w-7/12">
          <Post />
          <Posts />
        </div>
        <div className="w-4/12">
          {" "}
          <FriendList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
