import "./App.css";
import username from "../src/assets/images/username.png";
import visible from "../src/assets/images/visible.png";
import unvisible from "../src/assets/images/unvisible.png";
import youtube from "../src/assets/images/youtube.png";
import insta from "../src/assets/images/ig.jpeg";
import fb from "../src/assets/images/fb.png";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const [visibility, setvisibility] = useState(false);
  const [isUserNameEmpty, setisUserNameEmpty] = useState(false);
  const [isPasswordEmpty, setisPasswordEmpty] = useState(false);
  const [userExists, setuserExists] = useState(false);

  // useEffect(() => {
  //   //setisUserNameEmpty(true);
  //   document.getElementById("user").className="empty inputusername"
    
  // }, []);
  const CheckEmpty = (e) => {
    if (userName === "") {
      setisUserNameEmpty(true);
    }

    if (password === "") {
      setisPasswordEmpty(true);
    }

    if (userName !== "" && password !== "") {
      postRegistrationData();
    }
  };

  const postRegistrationData = () => {
    axios
      .post(
        `http://192.168.1.7:8000/api/v1/user/login`,
        {},
        {
          headers: {
            email: userName,
            password: password,
          },
        }
      )
      .then((response) => {
        setuserName("");
        setpassword("");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.reponse.status === 200) {
          setuserExists(true);
        }
      });
  };
  return (
    <div className="container">
      {console.log(userName)}

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
                value={userName}
                id="user"
                onChange={(e) => setuserName(e.target.value)}
                placeholder="admin@company.com"
                className={
                  isUserNameEmpty ? "inputusername empty" : "inputusername"
                }
                onFocus={() => {
                  setisUserNameEmpty(false);
                }}
              />
              <img src={username} className="image1" alt="usernameimg" />
            </div>
            <div className="password">
              <img
                src={visibility ? visible : unvisible}
                onClick={() => setvisibility(!visibility)}
                className="image2"
                alt="passwordimg"
              />
              <p className="ppassword">Password</p>
              <input
                type={visibility ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className={
                  isPasswordEmpty ? "inputpassword  empty" : "inputpassword"
                }
                onFocus={() => {
                  setisPasswordEmpty(false);
                }}
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
            {userExists && (
              <p style={{ textAlign: "center" }} className="font">
                {" "}
                Username does not exists
              </p>
            )}
            <button onClick={CheckEmpty} type="login">
              LOG IN{" "}
            </button>
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
