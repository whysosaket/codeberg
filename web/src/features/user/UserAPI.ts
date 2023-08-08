const fetchUser = async () => {
    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
        const response = await fetch("http://localhost:9000/api/getprofileinfo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken,
            },
        });
        const data = await response.json();
        if(data.success){
            return data.userInfo;
        }
    }
    return null;
};

const isLoggedin = () => {
    const authToken = localStorage.getItem("auth-token");
    if(authToken==null||authToken==undefined) {
        return false;
    }
    if (authToken) {
        return true;
    }
    return false;
};

export { fetchUser, isLoggedin };