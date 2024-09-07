import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import "./login.css";
function Login({ setToggle, setGameStart }) {
  const handleLogin = () => {
    document.querySelector(".App").classList.remove("blur");
    setGameStart(true);
  };

  const handleSignUp = () => {
    setToggle(false);
  };

  return (
    <div className="login hidden">
      <div className="login-form">
        <h1>LOGIN</h1>
        <form action="">
          <div className="user input">
            <BiUser fontSize={20} />
            <input type="text" placeholder="username" />
          </div>
          <div className="pass input">
            <RiLockPasswordLine fontSize={20} />
            <input type="text" placeholder="username" />
          </div>
          <button className="login-into" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <div className="signup">
        <p>new user...??</p>
        <button onClick={handleSignUp}>signUp</button>
      </div>
    </div>
  );
}

export default Login;
