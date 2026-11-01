

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/login.css";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");


    const handleLogin = (e) => {

        e.preventDefault();

        setError("");


        // Empty field validation
        if (!username.trim() || !password.trim()) {

            setError(
                "Please enter username and password."
            );

            return;
        }


        // Call authentication
        const result = login(
            username,
            password
        );


        // Login failed
        if (!result.success) {

            setError(result.message);

            return;
        }


        // Login successful
        navigate("/dashboard");
    };


    return (

        <div className="login-page">


            {/* LEFT SIDE */}

            <div className="login-info">

                <div className="login-brand">

                    Quiz<span>Master</span>

                </div>


                <h1>

                    Test Your Knowledge.

                    <br />

                    Improve Your Skills.

                </h1>


                <p>

                    Practice programming, computer science,
                    and technical concepts with interactive quizzes.

                </p>


                <div className="login-features">

                    <div>

                        <span>✓</span>

                        30 carefully selected questions

                    </div>


                    <div>

                        <span>✓</span>

                        Timed examination

                    </div>


                    <div>

                        <span>✓</span>

                        Instant result and analysis

                    </div>

                </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="login-form-container">


                <div className="login-card">


                    {/* HEADER */}

                    <div className="login-header">

                        <h2>
                            Welcome Back
                        </h2>

                        <p>
                            Login to continue your quiz
                        </p>

                    </div>


                    {/* LOGIN FORM */}

                    <form onSubmit={handleLogin}>


                        {/* USERNAME */}

                        <div className="form-group">

                            <label>
                                Username
                            </label>


                            <input

                                type="text"

                                placeholder="bwu/bca/24/241"

                                value={username}

                                onChange={(e) => {

                                    setUsername(
                                        e.target.value
                                    );

                                    setError("");

                                }}

                            />

                            <small>
                                Use ID from bwu/bca/24/241 to bwu/bca/24/300
                            </small>

                        </div>


                        {/* PASSWORD */}

                        <div className="form-group">

                            <label>
                                Password
                            </label>


                            <input

                                type="password"

                                placeholder="BWU/BCA/24/241"

                                value={password}

                                onChange={(e) => {

                                    setPassword(
                                        e.target.value
                                    );

                                    setError("");

                                }}

                            />

                            <small>
                                Password is your ID in uppercase
                            </small>

                        </div>


                        {/* ERROR */}

                        {error && (

                            <div className="login-error">

                                <span>⚠</span>

                                {error}

                            </div>

                        )}


                        {/* LOGIN BUTTON */}

                        <button

                            type="submit"

                            className="login-button"

                        >

                            Login

                            <span>→</span>

                        </button>


                    </form>


                    {/* NOTE */}

                    {/* <p className="login-note">

                        Username range:

                        <strong>
                            bwu/bca/24/241
                        </strong>

                        {" "}to{" "}

                        <strong>
                            bwu/bca/24/300
                        </strong>

                    </p> */}


                </div>

            </div>

        </div>
    );
}

export default Login;