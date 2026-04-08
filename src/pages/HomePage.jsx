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
                flexDirection: "column",
                boxSizing: "border-box"
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
                        textAlign: "right",
                        alignSelf: "center"
                    }}
                >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>Details</h4>
                    <p><strong>Genre:</strong> Horror / Sci-Fi</p>
                    <p><strong>Duration:</strong> 2h 07m</p>
                    <p><strong>Release:</strong> 2026</p>
                    <p><strong>Director:</strong> Mark Fishbach</p>
                    <p><strong>Rating:</strong> R - Language | Some Gore | Bloody Images</p>
                </div>

                {/* middle column content */}
                <div style={{ textAlign: "center", flex: "1" }}>
                    <img
                        src={mainMovieImage}
                        alt="movie"
                        style={{
                            width: "70%",
                            maxWidth: "900px",
                            maxHeight: "40vh",
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

                    {/* book seat button */}
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

                    {/* showtimes display */}
                    <div style={{ marginTop: "25px" }}>
                        <h5 style={{ color: "#fff", marginBottom: "12px", letterSpacing: "1px" }}>
                            🕐 Showtimes
                        </h5>
                        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                            {["11:00 AM", "1:30 PM", "5:00 PM", "9:30 PM"].map((time) => (
                                <span
                                    key={time}
                                    style={{
                                        padding: "8px 16px",
                                        border: "1px solid #ff4444",
                                        borderRadius: "6px",
                                        color: "#ff4444",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    {time}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
                {/* end of middle column stuff */}

                {/* right side column */}
                <div
                    style={{
                        width: "220px",
                        textAlign: "left",
                        alignSelf: "center"
                    }}
                >
                    <h4 style={{ color: "#fff", marginBottom: "15px" }}>Reviews</h4>

                    <p style={{ fontSize: "28px", color: "#ff4444", fontWeight: "bold" }}>
                        ★ 7.3
                    </p>
                    <p style={{ color: "#aaa", marginBottom: "15px" }}>Audience Score</p>

                    <p style={{ fontSize: "24px", color: "#ff6314", fontWeight: "bold" }}>
                        🍅 72%
                    </p>
                    <p style={{ color: "#aaa", marginBottom: "15px" }}>Rotten Tomatoes</p>

                    <p style={{ fontSize: "24px", color: "#f5c518", fontWeight: "bold" }}>
                        ⭐ 6.8
                    </p>
                    <p style={{ color: "#aaa" }}>IMDb</p>
                </div>
            </div>

            {/* bottom footer info */}
            <div
                style={{
                    padding: "30px 20px",
                    textAlign: "center",
                    borderTop: "1px solid #2a2a2a",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    marginTop: "60px"
                }}
            >
                <p style={{ color: "#aaa", maxWidth: "500px", margin: "0 auto", lineHeight: "1.6" }}>
                    Book your seats now with Alfaim's brand new movie booking site! In a few short
                    clicks, you'll be watching your favourite movies in no time!
                </p>

                <p style={{ color: "#666", marginTop: "20px", fontSize: "14px" }}>
                    © 2026 Alfaim's Awe-Inspiring Movie Multiplex
                </p>
            </div>
        </div>
    );
}

export default HomePage;