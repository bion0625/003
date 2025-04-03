const Login = ({setIsLogin}) => {
    return (
        <div className="content-box">
            <h1>LOGIN</h1>
            <input type="text" placeholder="ID"/>
            <input type="password" placeholder="PASSWORD"/>
            <button>LOGIN</button>
        </div>
    )
};

export default Login;