export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const login = (email) => ({
    type : LOGIN,
    payload : email,
});

export const logout = () => ({
    type : LOGOUT
})

export const register = (email) => ({
    type : REGISTER,
    payload : email,
})