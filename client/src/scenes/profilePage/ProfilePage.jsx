import { useDispatch, useSelector } from "react-redux";
import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";
import axios from "axios";
import { setPosts } from "../../state";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  let PostData = [];
  let { id } = useParams();

  // router.get("/userId/posts", verifyToken, getUserPosts);
  const getPosts = async () => {
    await axios
      .get(`http://localhost:3001/${id}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        PostData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
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
          <Posts PostData={PostData} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
