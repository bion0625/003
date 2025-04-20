import { useRef, useState } from "react";
import { login } from "../util/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const idRef = useRef();
  const passwordRef = useRef();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (info) => login("http://localhost:8080/login", info),
    onSuccess: () => navigate("/"),
    onError: (error) => {
      setIsError(true);
      setErrorMessage(error.message);
    },
  });

  const loginRequest = () => {
    if (
        idRef.current.value === "" ||
        passwordRef.current.value === ""
      ) {
        setIsError(true);
        setErrorMessage("모든 값을 채워주세요.");
        return;
      }
      mutate({
        username: idRef.current.value,
        password: passwordRef.current.value,
        setIsLogin
      });
  };

  return (
    <div className="content-box">
      <h1>LOGIN</h1>
      <input type="text" placeholder="ID" ref={idRef} />
      <input type="password" placeholder="PASSWORD" ref={passwordRef} />
      {isError && <span className="error">{errorMessage}</span>}
      <button onClick={loginRequest}>LOGIN</button>
    </div>
  );
};

export default Login;
