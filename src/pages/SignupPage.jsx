import { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const pageStyle = {
        background: "linear-gradient(to bottom, #1c1c1c, #0f0f0f)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessage("Please fill in all fields!");
            return;
        }

        try {
            //signing up for account
            const res = await fetch("https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.message || "Signup failed");
                return;
            }

            //logins immediately after signup
            const loginRes = await fetch("https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const loginData = await loginRes.json();

            if (loginData.auth) {
                localStorage.setItem("token", loginData.token);
                setMessage("Signup successful! Logging you in...");

                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            } else {
                setMessage("Signup worked, but login failed");
            }
        } catch (err) {
            console.error(err);
            setMessage("Server error");
        }
    };

    return (
        <div style={pageStyle}>
            <div className="container mt-5">
                <h1 className="mt-3">Signup</h1>
                <form onSubmit={handleSignup} className="mt-4">
                    <input
                        type="email" required
                        placeholder="Email"
                        className="form-control mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password" required
                        placeholder="Password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn-primary">Signup</button>
                </form>
                <p className="mt-3">{message}</p>
                <p className="mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignupPage;