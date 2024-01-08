import Post from "../../components/Post";
import Profile from "../../components/Profile";
import NavBar from "../navBar/NavBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Profile />
        <Post />
      </div>
    </div>
  );
}

export default HomePage;
