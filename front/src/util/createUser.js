export const createUser = (url, {username, name, password}) => {
    return fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username,name,password})
    }).then(res => {
        if(!res.ok) throw new Error(`Use another ID`);
    });
};