import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginandsignup.css";

function Loginandsignup() {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE"; // Replace with your client ID

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: handleGoogleResponse,
            });
            google.accounts.id.renderButton(
                document.getElementById("googleSignInDiv"),
                { theme: "outline", size: "large", width: "100%" }
            );
        }
    }, []);

    const handleGoogleResponse = async (response) => {
        // The JWT token from Google
        const token = response.credential;

        console.log("Google JWT Token:", token);

        // Send token to your backend to verify & create/login user
        const res = await fetch("http://localhost:5000/google-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });

        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userDetails", JSON.stringify(data.user));
            navigate("/home");
        } else {
            alert(data.message || "Google login failed");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSignup && password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const url = isSignup ? "http://localhost:5000/signup" : "http://localhost:5000/login";
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            if (isSignup) {
                alert("User registered successfully");
                setIsSignup(false);
            } else {
                localStorage.setItem("token", data.token);
                const userDetailsResponse = await fetch("http://localhost:5000/user/details", {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${data.token}` },
                });

                const userDetailsData = await userDetailsResponse.json();
                if (userDetailsResponse.ok) {
                    localStorage.setItem("userDetails", JSON.stringify(userDetailsData));
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
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {isSignup && (
                            <div className="input-group">
                                <label>Confirm Password:</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}

                        <button type="submit" className="login-button">
                            {isSignup ? "Sign Up" : "Login"}
                        </button>

                        {/* Google Sign-In Button */}
                        <div id="googleSignInDiv" style={{ width: "100%", marginTop: "10px" }}></div>

                        <div className="signup-link">
                            <p>
                                {isSignup ? "Already have an account? " : "Don't have an account? "}
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
