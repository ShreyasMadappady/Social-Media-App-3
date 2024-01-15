import { useDispatch, useSelector } from "react-redux";
import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";
import axios from "axios";
import { setPosts } from "../../state";

function ProfilePage() {
  const user = useSelector((state) => state.user);
  console.log(user);

  const dispatch = useDispatch();

  // router.get("/userId/posts", verifyToken, getUserPosts);
  const getPost = async () => {
    await axios
      .get("http://localhost:3001/posts/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setPosts({ posts: response.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPost();
  }, []);


  return (
    <div>
      <NavBar />
      <div className="flex w-8/12 mx-auto gap-8">
        <div className="w-6/12">
          <Profile user={user} />
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
