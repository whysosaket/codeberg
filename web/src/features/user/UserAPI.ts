const fetchUser = async () => {
    const authToken = localStorage.getItem("auth-token");
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