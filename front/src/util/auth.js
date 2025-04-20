export const createUser = (url, {username, name, password}) => {
    return fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username,name,password})
    }).then(res => {
        if(!res.ok) throw new Error(`Use another ID`);
    });
};

export const login = (url, {username, password, setIsLogin}) => {
    return fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username,password})
    }).then(res => {
        if(!res.ok) throw new Error(`auth error`);
        return res.json();
    }).then(data => {
        localStorage.setItem("_auth_token", data.token);
        setIsLogin(true);
    });
};