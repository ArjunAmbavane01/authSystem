import { useRef } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { username, isLogin, setIsLogin, login } = useAuth();
  const inputRef = useRef();

  const handleLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      const userInput = inputRef.current.value;
      if (userInput.trim() == "") {
        inputRef.current.focus();
      } else {
        login(userInput);
      }
    }
  };
  return (
    <div className="login">
      <div className="login-left">
        {isLogin ? (
          <div className="welcome">
          Welcome {username} !
          </div>
        ) : (
          <>
            <label htmlFor="username">Username :</label>
            <input ref={inputRef} type="text" name="username" id="username" />
          </>
        )}
      </div>

      <div className="login-right" onClick={handleLogin}>
        {isLogin ? "Logout" : "Login"}
      </div>
    </div>
  );
};

export default Login;
