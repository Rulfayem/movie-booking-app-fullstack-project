import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                padding: "40px",
                textAlign: "center",
                color: "white",
                background: "linear-gradient(to bottom, #1c1c1c, #0f0f0f)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
                404
            </h1>
            <p style={{ marginBottom: "20px", color: "#aaa" }}>
                Page not found
            </p>
            <span
                onClick={() => navigate("/")}
                style={{
                    color: "#ff4444",
                    cursor: "pointer",
                    textDecoration: "underline"
                }}
            >
                Go back home
            </span>
        </div>
    );
}

export default ErrorPage;