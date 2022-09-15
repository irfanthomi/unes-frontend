
//Get user info from localstorage
export const allowUser = (user: any) => {
    if (user.result.tipe === 'BPOP') {
        setLocalStorage("user", user.result);
        setLocalStorage("token", user.token);
        return true;
    }
    return false;
}
export const isAuth = () => {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user") as string);
    } else {
        return false;
    }
}
export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));

};
export const removeLocalStorage = (key: string) => {
    localStorage.clear();
};
