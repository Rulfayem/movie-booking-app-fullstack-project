import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const pageStyle = {
        background: "linear-gradient(to bottom, #1c1c1c, #0f0f0f)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessage("Please fill in all fields!");
            return;
        }

        try {
            const res = await fetch("https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (data.auth) {
                localStorage.setItem("token", data.token);
                setMessage("Login successful!");

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                setMessage("Invalid credentials");
            }
        } catch (err) {
            console.error(err);
            setMessage("Server error");
        }
    };

    return (
        <div style={pageStyle}>
            <div className="container mt-5">
                <h1 className="mt-3">Login</h1>
                <form onSubmit={handleLogin} className="mt-4">
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
                    <button className="btn btn-success">Login</button>
                </form>
                <p className="mt-3">{message}</p>
                <p className="mt-3">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;