import { Navbar, Container, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import logoImage from "./assets/movie-coding-logo.png";

function Layout() {
    const siteLogo = logoImage;
    const siteTitle = "Alfaim's Awe-Inspiring Movie Multiplex!";
    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <>
            {/* navbar stuff below */}
            <Navbar bg="dark" variant="dark" style={{ padding: "12px 0" }}>
                <Container fluid className="d-flex justify-content-between">

                    {/* logo + title shown top left */}
                    <div className="d-flex align-items-center">
                        <img
                            src={siteLogo}
                            alt="logo"
                            style={{ width: "42px", marginRight: "12px" }}
                        />
                        <Navbar.Brand
                            as={Link}
                            to="/"
                            style={{ fontWeight: "bold", fontSize: "18px" }}
                        >
                            {siteTitle}
                        </Navbar.Brand>
                    </div>

                    {/* login + signup + logout button shown top right */}
                    <div>
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login">
                                    <Button variant="outline-light" className="me-2">
                                        Login
                                    </Button>
                                </Link>

                                <Link to="/signup">
                                    <Button variant="light">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Button variant="danger" onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </div>
                </Container>
            </Navbar>

            {/* content of page is displayed below here */}
            <Outlet />
        </>
    );
}

export default Layout;