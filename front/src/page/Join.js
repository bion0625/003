import { useRef, useState } from "react";

const Join = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    
    const [isError, setIsError] = useState(false);

    const joinRequest = () => {
        if (idRef.current.value === '' || nameRef.current.value === '' || passwordRef.current.value === '' ) {
            setIsError(true);
            return;
        }
    }

    return (
        <div className="content-box">
            <input type="text" placeholder="ID" ref={idRef}/>
            <input type="text" placeholder="NAME" ref={nameRef}/>
            <input type="password" placeholder="PASSWORD" ref={passwordRef}/>
            {isError && <span className="error">모든 값을 채워주세요.</span>}
            <button onClick={joinRequest}>JOIN</button>
        </div>
    )
};

export default Join;