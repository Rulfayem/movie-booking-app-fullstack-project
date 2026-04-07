import { Link } from "react-router-dom";

function SignupPage() {
    return (
        <div style={{ padding: "20px" }}>
            <Link to="/">
                ← Back to Home
            </Link>
            <h1>Signup Page</h1>
        </div>
    );
}

export default SignupPage;