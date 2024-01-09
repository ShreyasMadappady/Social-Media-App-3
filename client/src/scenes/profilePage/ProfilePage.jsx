import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";

function ProfilePage() {
  return (
    <div>
      <NavBar />
      <div className="flex w-8/12 mx-auto gap-8">
        <div className="w-6/12">
          <Profile />
          <FriendList />
        </div>
        <div className="w-10/12">
          <Post />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
