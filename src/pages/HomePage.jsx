import { Navbar, Container, Button } from "react-bootstrap";
import logoImage from "../assets/movie-coding-logo.png";

function HomePage() {
    const siteLogo = logoImage;
    const siteTitle = "Alfaim's Awe-Inspiring Movie Multiplex!";

    return (
        <div>
            {/* navbar stuff */}
            <Navbar bg="dark" variant="dark">
                <Container fluid className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <img
                            src={siteLogo}
                            alt="logo"
                            style={{ width: "40px", marginRight: "10px" }}
                        />
                        <Navbar.Brand>{siteTitle}</Navbar.Brand>
                    </div>
                    <div>
                        <Button variant="outline-light" className="me-2">
                            Login
                        </Button>
                        <Button variant="light">
                            Sign Up
                        </Button>
                    </div>

                </Container>
            </Navbar>

            {/* main page content stuff */}
            <div style={{ padding: "20px" }}>
                <h1>Movie Seat Booking</h1>
                <p>Temporary stuff</p>
            </div>
        </div>
    );
}

export default HomePage;