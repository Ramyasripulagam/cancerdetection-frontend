import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginandsignup.css";

function Loginandsignup() {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (isSignup && password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const url = isSignup ? "http://localhost:5000/signup" : "http://localhost:5000/login";
        console.log("Making request to:", url); // Debugging line
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log("Backend Response:", data); // Debugging line
        if (response.ok) {
            if (isSignup) {
                alert("User registered successfully");
                setIsSignup(false);
            } else {
                localStorage.setItem("token", data.token);
                console.log("Token stored in localStorage:", data.token); // Debugging line

                // Fetch user details after login
                const userDetailsResponse = await fetch("http://localhost:5000/user/details", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${data.token}`,
                    },
                });

                const userDetailsData = await userDetailsResponse.json();
                console.log("User Details Response:", userDetailsData); // Debugging line
                if (userDetailsResponse.ok) {
                    localStorage.setItem("userDetails", JSON.stringify(userDetailsData));
                    console.log("User details stored in localStorage:", userDetailsData); // Debugging line
                    console.log("Navigating to /home"); // Debugging line
                    navigate("/home");
                } else {
                    alert("Failed to fetch user details");
                }
            }
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="login-body">
            <div className="left-body">
                <video
                    src="https://cdn.pixabay.com/video/2024/03/30/206173_tiny.mp4"
                    autoPlay
                    loop
                    muted
                    className="video-background"
                    disablePictureInPicture
                    playsInline
                ></video>
            </div>
            <div className="right-body">
                <div className="login-container">
                    <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email" className="input-label">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password" className="input-label">
                                Password:
                            </label>
                            <div className="password-container">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {isSignup && (
                            <div className="input-group">
                                <label htmlFor="confirm-password" className="input-label">
                                    Confirm Password:
                                </label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}

                        <button type="submit" className="login-button">
                            {isSignup ? "Sign Up" : "Login"}
                        </button>

                        <button type="button" className="google-signin-button">
                            {isSignup ? "Sign up with Google" : "Sign in with Google"}
                        </button>

                        <div className="signup-link">
                            <p>
                                {isSignup
                                    ? "Already have an account? "
                                    : "Don't have an account? "}
                                <button type="button" onClick={toggleForm} className="toggle-button">
                                    {isSignup ? "Login" : "Sign Up"}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Loginandsignup;