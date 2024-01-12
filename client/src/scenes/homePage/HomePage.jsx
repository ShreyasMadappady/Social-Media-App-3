import { useEffect } from "react";
import FriendList from "../../components/FriendList";
import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

function HomePage() {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);

  

  return (
    <div>
      <NavBar userName={user.firstName} />
      <div className="flex justify-between   mx-28 gap-6">
        <div className="w-4/12">
          {" "}
          <Profile user={user} />
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
