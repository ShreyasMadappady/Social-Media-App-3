import Post from "../../components/Post";
import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Profile />
        <div className="flex flex-col">
          {" "}
          <Post />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
