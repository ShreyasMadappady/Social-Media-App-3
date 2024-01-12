import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const { _id, picturePath } = useSelector((state) => state.user);
  useSelector((state) => console.log(state.user));

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
