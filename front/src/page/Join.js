import { useRef, useState } from "react";
import { createUser } from "../util/createUser";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const {mutate} = useMutation({
        mutationFn: info => createUser("http://localhost:8080/users", info),
        onSuccess: () => navigate('/login'),
        onError: error => {
            setIsError(true);
            setErrorMessage(error.message);
        }
    });

    const joinRequest = () => {
        if (idRef.current.value === '' || nameRef.current.value === '' || passwordRef.current.value === '' ) {
            setIsError(true);
            setErrorMessage("모든 값을 채워주세요.");
            return;
        }
        mutate({
            username: idRef.current.value,
            name: nameRef.current.value,
            password: passwordRef.current.value
        });
    }

    return (
        <div className="content-box">
            <h1>JOIN</h1>
            <input type="text" placeholder="ID" ref={idRef}/>
            <input type="text" placeholder="NAME" ref={nameRef}/>
            <input type="password" placeholder="PASSWORD" ref={passwordRef}/>
            {isError && <span className="error">{errorMessage}</span>}
            <button onClick={joinRequest}>JOIN</button>
        </div>
    )
};

export default Join;