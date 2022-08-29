import "./App.css";
import username from "../src/assets/images/username.png";
import unvisible from "../src/assets/images/unvisible.png";
import youtube from "../src/assets/images/youtube.png";
import insta from "../src/assets/images/ig.jpeg";
import fb from "../src/assets/images/fb.png";
function App() {
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="content1">
          <div className="item1">
            <p className="acc">Log in to Your account</p>
          </div>
          <div className="item2">
            <p className="para">
              Log in to your account so you can continue using our customer
              experience.
            </p>
          </div>
        </div>
        <div className="content2">
          <div className="item3">Login</div>
          <div className="item4">Register</div>
        </div>
        <div className="content3">
          <div className="item5">
            <div className="username">
              <p className="pusername">Username</p>
              <input
                type="text"
                name="name"
                placeholder="admin@company.com"
                className="inputusername"
              />
              <img src={username} className="image1" alt="usernameimg" />
            </div>
            <div className="password">
              <img src={unvisible} className="image2" alt="passwordimg" />
              <p className="ppassword">Password</p>
              <input
                type="password"
                name="password"
                className="inputpassword"
              ></input>
            </div>
          </div>
          <div className="item6">
            <div className="divitem6">
              <div className="divitem6a">
                <input type="checkbox" className="checkbox" />
                <p className="rememberme">Remember me</p>
              </div>
              <p className="fpassword">Forgot password?</p>
            </div>
            <button type="login">LOG IN </button>
            <p className="followus">Follow us </p>
            <div className="icons">
              <img src={youtube} className="youtube" alt="youtubeimg" />
              <img src={fb} className="fb" alt="fbimg" />
              <img src={insta} className="insta" alt="instaimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
