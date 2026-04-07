import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div style={{ padding: "20px" }}>
            <Link to="/">
                ← Back to Home
            </Link>
            <h1>Login Page</h1>
        </div>
    );
}

export default LoginPage;