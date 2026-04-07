import { Navbar, Container, Button } from "react-bootstrap";
import logoImage from "../assets/movie-coding-logo.png";
import movieImage from "../assets/ironlungmarkiplier.jpg";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const siteLogo = logoImage;
    const siteTitle = "Alfaim's Awe-Inspiring Movie Multiplex!";
    const mainMovieImage = movieImage;
    const isLoggedIn = false;
    const navigate = useNavigate();

    //handles book seat button
    const handleBookingClick = () => {
        if (isLoggedIn) {
            navigate("/booking");
        } else {
            alert("You must login or signup first to book a seat.");
        }
    };

    return (
        <div
            style={{
                //super cool moody dark gradient background
                background: "linear-gradient(to bottom, #1c1c1c, #0f0f0f)",
                minHeight: "100vh",
                color: "white",
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: "column"
            }}
        >
            {/* beginning of navbar stuff */}
            <Navbar bg="dark" variant="dark" style={{ padding: "12px 0" }}>
                <Container fluid className="d-flex justify-content-between">

                    {/* controls site logo and title*/}
                    <div className="d-flex align-items-center">
                        <img
                            src={siteLogo}
                            alt="logo"
                            style={{ width: "42px", marginRight: "12px" }}
                        />
                        <Navbar.Brand style={{ fontWeight: "bold", fontSize: "18px" }}>
                            {siteTitle}
                        </Navbar.Brand>
                    </div>
                    <div>
                        {/* login button */}
                        <Link to="/login">
                            <Button variant="outline-light" className="me-2">
                                Login
                            </Button>
                        </Link>
                        {/* signup button */}
                        <Link to="/signup">
                            <Button variant="light">
                                Sign Up
                            </Button>
                        </Link>

                    </div>

                </Container>
            </Navbar>
            {/* end of navbar stuff */}

            {/* movie image */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "80px 40px",
                    flex: "1",
                    gap: "40px"
                }}
            >
                {/* left side column content */}
                <div
                    style={{
                        width: "220px",
                        color: "#ccc",
                        textAlign: "left"
                    }}
                >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>Details</h4>
                    <p><strong>Genre:</strong> Horror / Sci-Fi</p>
                    <p><strong>Duration:</strong> 2h 07m</p>
                    <p><strong>Release:</strong> 2026</p>
                </div>

                {/* middle column content, picture and booking and stuff */}
                <div style={{ textAlign: "center", flex: "1" }}>
                    <img
                        src={mainMovieImage}
                        alt="movie"
                        style={{
                            width: "70%",
                            maxWidth: "900px",
                            borderRadius: "14px",

                            //best new effect ever
                            boxShadow: "0 0 30px rgba(255, 0, 0, 0.35)",
                            marginBottom: "30px"
                        }}
                    />

                    {/* movie description below image */}
                    <div
                        style={{
                            maxWidth: "600px",
                            margin: "0 auto",
                            textAlign: "center",
                            marginBottom: "25px"
                        }}
                    >
                        <h2
                            style={{
                                marginBottom: "12px",
                                fontWeight: "600",
                                letterSpacing: "1px"
                            }}
                        >
                            Iron Lung
                        </h2>
                        <p
                            style={{
                                color: "#ccc",
                                marginBottom: "15px",
                                lineHeight: "1.6"
                            }}
                        >
                            In a post-apocalyptic future after "The Quiet Rapture" event, a convict explores a
                            blood ocean on a desolate moon using a submarine called the "Iron Lung" to search for missing stars/planets.
                        </p>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#888"
                            }}
                        >
                            ⚠️ You must be logged in to book a seat
                        </p>
                    </div>

                    <h2
                        style={{
                            marginBottom: "25px",
                            fontWeight: "600",
                            letterSpacing: "2px",
                            color: "#ddd",
                            textTransform: "uppercase"
                        }}
                    >
                        Now Showing
                    </h2>

                    <Button
                        variant="danger"
                        size="lg"
                        onClick={handleBookingClick}
                        style={{
                            padding: "14px 40px",
                            fontSize: "20px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            borderRadius: "8px",

                            boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
                            transition: "0.2s"
                        }}
                    >
                        Book Seat
                    </Button>
                </div>

                {/* right side column content */}
                <div
                    style={{
                        width: "220px",
                        textAlign: "center"
                    }}
                >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>Rating</h4>
                    <p style={{ fontSize: "28px", color: "#ff4444", fontWeight: "bold" }}>
                        ★ 7.3
                    </p>
                    <p style={{ color: "#aaa" }}>Audience Score</p>
                </div>
            </div>

            {/* things at very bottom of page */}
            <div
                style={{
                    padding: "30px 20px",
                    textAlign: "center",
                    borderTop: "1px solid #2a2a2a"
                }}
            >
                <p style={{ color: "#aaa", maxWidth: "500px", margin: "0 auto", lineHeight: "1.6" }}>
                    Book your seat for the latest showing quickly and easily.
                    This simple booking system lets you reserve your spot in just a few clicks.
                </p>

                <p style={{ color: "#666", marginTop: "20px", fontSize: "14px" }}>
                    © 2026 Alfaim's Awe-Inspiring Movie Multiplex
                </p>
            </div>
        </div>
    );
}

export default HomePage;