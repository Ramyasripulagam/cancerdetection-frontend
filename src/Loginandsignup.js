import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginandsignup.css";

function Loginandsignup() {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const CLIENT_ID = "845936642558-l7ft9n34dm5mkjpdg9iq9hdjq4lk473s.apps.googleusercontent.com";

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    // Wrap Google response handler in useCallback to avoid useEffect warning
    const handleGoogleResponse = useCallback(async (response) => {
        const token = response.credential;
        console.log("Google JWT Token:", token);

        try {
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
        } catch (error) {
            console.error("Google login error:", error);
            alert("Google login failed");
        }
    }, [navigate]);

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
    }, [handleGoogleResponse]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSignup && password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const url = isSignup ? "http://localhost:5000/signup" : "http://localhost:5000/login";

        try {
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
                        headers: { Authorization: `Bearer ${data.token}` },
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
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
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
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {isSignup && (
                            <div className="input-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
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
