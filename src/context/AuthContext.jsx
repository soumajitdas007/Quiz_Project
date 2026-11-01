import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const isValidUsername = (username) => {

        const usernamePattern =
            /^bwu\/bca\/24\/(24[1-9]|2[5-9][0-9]|300)$/;

        return usernamePattern.test(username);
    };


    const login = (username, password) => {

        username = username.trim();
        password = password.trim();

        if (!isValidUsername(username)) {
            return {
                success: false,
                message:
                    "Invalid username. Use bwu/bca/24/241 to bwu/bca/24/300."
            };
        }


        const correctPassword = username.toUpperCase();


        if (password !== correctPassword) {
            return {
                success: false,
                message:
                    "Invalid password. Password must be the uppercase version of your username."
            };
        }


        const userData = {
            username: username,
            password: password
        };


        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );
        setUser(userData);


        return {
            success: true,
            message: "Login successful"
        };
    };


    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);