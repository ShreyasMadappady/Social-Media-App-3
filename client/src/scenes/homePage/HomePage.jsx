import { useEffect, useState } from "react";
import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import axios from "axios";

function HomePage() {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [posts, setPosts] = useState();

  const dispatch = useDispatch();

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

  const PostData = useSelector((state) => state.posts);

  return (
    <div>
      <NavBar userName={user.firstName} />
      <div className="flex justify-between   mx-28 gap-6">
        <div className="w-4/12">
          {" "}
          <Profile user={user} />
        </div>

        <div className="flex flex-col w-7/12 overflow-scroll scrollbar-hide h-screen ">
          <Post />
          <Posts PostData={PostData} />
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
