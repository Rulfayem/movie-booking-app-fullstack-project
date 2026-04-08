import { Button } from "react-bootstrap";
import movieImage from "../assets/ironlungmarkiplier.jpg";
import { useNavigate } from "react-router-dom";

function HomePage() {
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
                height: "100vh",
                overflow: "hidden",
                color: "white",
                fontFamily: "Arial, sans-serif",
                display: "flex",
                flexDirection: "column"
            }}
        >
            {/* controls entire top row layout */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "20px 40px",
                    gap: "20px",
                    overflow: "hidden"
                }}
            >
                {/* left side column content */}
                <div
                    style={{
                        width: "220px",
                        color: "#ccc",
                        textAlign: "left",
                        alignSelf: "flex-start"
                    }}
                >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>Details</h4>
                    <p><strong>Genre:</strong> Horror / Sci-Fi</p>
                    <p><strong>Duration:</strong> 2h 07m</p>
                    <p><strong>Release:</strong> 2026</p>
                </div>

                {/* middle column content */}
                <div style={{ textAlign: "center", flex: "1" }}>
                    <img
                        src={mainMovieImage}
                        alt="movie"
                        style={{
                            width: "70%",
                            maxWidth: "900px",
                            maxHeight: "45vh",
                            objectFit: "cover",
                            borderRadius: "14px",
                            boxShadow: "0 0 30px rgba(255, 0, 0, 0.35)",
                            marginBottom: "20px"
                        }}
                    />

                    {/* movie description */}
                    <div
                        style={{
                            maxWidth: "600px",
                            margin: "0 auto",
                            textAlign: "center",
                            marginBottom: "15px"
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
                            marginBottom: "15px",
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

                {/* right side column */}
                <div
                    style={{
                        width: "220px",
                        textAlign: "center",
                        alignSelf: "flex-start"
                    }}
                >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>Rating</h4>
                    <p style={{ fontSize: "28px", color: "#ff4444", fontWeight: "bold" }}>
                        ★ 7.3
                    </p>
                    <p style={{ color: "#aaa" }}>Audience Score</p>
                </div>
            </div>

            {/* bottom footer info */}
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