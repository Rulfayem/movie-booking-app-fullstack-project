import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function BookingPage() {
    const rows = 6;
    const columns = 20;
    const seatPrice = 20;

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [showTime, setShowTime] = useState("");
    const [editingBookingId, setEditingBookingId] = useState(null);

    //fetch already booked seats
    useEffect(() => {
        fetch("https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/bookings")
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                const allSeats = data.flatMap(booking =>
                    typeof booking.seats === "string"
                        ? JSON.parse(booking.seats)
                        : booking.seats
                );
                setBookedSeats(allSeats);
            })
            .catch(err => console.error("Error fetching bookings:", err));
    }, []);

    //handles choosing seating choice
    const toggleSeat = (seatId) => {
        if (bookedSeats.includes(seatId) && !selectedSeats.includes(seatId)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    //handles confirming booking 
    const handleConfirm = async () => {
        const totalPrice = selectedSeats.length * seatPrice;

        if (!showTime) {
            alert("Please enter a show time");
            return;
        }
        const confirmBooking = window.confirm(
            `You selected ${selectedSeats.length} seat(s).\nTotal price: RM${totalPrice}\n\nConfirm booking?`
        );
        if (!confirmBooking) return;
        try {
            const response = await fetch("https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    seats: selectedSeats,
                    totalPrice: totalPrice,
                    showTime: showTime
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert("Booking confirmed!");
                refreshData();
                setSelectedSeats([]);
                setShowTime("");
            } else {
                alert(data.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to server");
        }
    };

    //update booking
    const handleUpdate = async () => {
        const totalPrice = selectedSeats.length * seatPrice;

        try {
            const response = await fetch(`https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/bookings/${editingBookingId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    seats: selectedSeats,
                    totalPrice: totalPrice,
                    showTime: showTime
                })
            });

            if (response.ok) {
                alert("Booking updated!");
                setEditingBookingId(null);
                setSelectedSeats([]);
                setShowTime("");
                refreshData();
            }
        } catch (error) {
            console.error("Error updating:", error);
        }
    };

    //delete bookings
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Delete this booking?");
        if (!confirmDelete) return;

        try {
            await fetch(`https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/bookings/${id}`, {
                method: "DELETE"
            });
            refreshData();
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    //refresh helper
    const refreshData = async () => {
        const updated = await fetch("https://c70b61c0-56c9-4ea6-bbc1-2ecbe389ae5d-00-1uyiawojgytyw.sisko.replit.dev/bookings")
            .then(res => res.json());
        setBookings(updated);
        const allSeats = updated.flatMap(b =>
            typeof b.seats === "string"
                ? JSON.parse(b.seats)
                : b.seats
        );
        setBookedSeats(allSeats);
    };

    return (
        <div style={{ padding: "40px", textAlign: "center", color: "white", background: "#111", minHeight: "100vh" }}>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "900px", margin: "0 auto 30px auto" }}>
                <h1 style={{ margin: 0 }}>Select Your Seats</h1>
            </div>

            {/* screen indicator */}
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto 30px auto",
                    textAlign: "center"
                }}
            >
                <div
                    style={{
                        background: "linear-gradient(to bottom, #eee, #aaa)",
                        color: "#111",
                        padding: "10px",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                    }}
                >
                    SCREEN
                </div>
            </div>

            {/* seating system made by grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gap: "8px",
                    maxWidth: "900px",
                    margin: "0 auto"
                }}
            >
                {[...Array(rows * columns)].map((_, index) => {
                    const seatId = index + 1;
                    const isSelected = selectedSeats.includes(seatId);
                    const isBooked = bookedSeats.includes(seatId);

                    return (
                        <div
                            key={seatId}
                            onClick={() => toggleSeat(seatId)}
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "4px",
                                cursor: isBooked ? "not-allowed" : "pointer",
                                backgroundColor: isBooked
                                    ? "#222"
                                    : isSelected
                                        ? "#ff4444"
                                        : "#444",
                                opacity: isBooked ? 0.4 : 1,
                                transition: "0.2s"
                            }}
                        />
                    );
                })}
            </div>

            {/* info displayed below seating grid */}
            <div style={{ marginTop: "30px" }}>
                <p>Selected Seats: {selectedSeats.length}</p>
                <p>Total Price: RM{selectedSeats.length * seatPrice}</p>

                <input
                    type="text"
                    placeholder="Enter show time"
                    value={showTime}
                    onChange={(e) => setShowTime(e.target.value)}
                    style={{
                        padding: "10px",
                        marginBottom: "10px",
                        width: "250px",
                        borderRadius: "5px",
                        border: "none"
                    }}
                />
                <br />
                {editingBookingId ? (
                    <Button variant="warning" onClick={handleUpdate}>
                        Update Booking
                    </Button>
                ) : (
                    <Button
                        variant="danger"
                        onClick={handleConfirm}
                        disabled={selectedSeats.length === 0}
                    >
                        Confirm Booking
                    </Button>
                )}
            </div>

            {/* bookings list */}
            <div style={{ marginTop: "50px" }}>
                <h2>All Bookings</h2>

                {bookings.map((booking) => (
                    <div
                        key={booking.id}
                        style={{
                            background: "#222",
                            padding: "15px",
                            margin: "10px auto",
                            maxWidth: "400px",
                            borderRadius: "8px"
                        }}
                    >
                        <p>ID: {booking.id}</p>
                        <p>
                            Seats: {(typeof booking.seats === "string"
                                ? JSON.parse(booking.seats)
                                : booking.seats
                            ).join(", ")}
                        </p>
                        <p>Time: {booking.show_time}</p>
                        <p>Total: RM{booking.total_price}</p>

                        <Button
                            variant="warning"
                            onClick={() => {
                                setEditingBookingId(booking.id);

                                const seats = typeof booking.seats === "string"
                                    ? JSON.parse(booking.seats)
                                    : booking.seats;

                                setSelectedSeats(seats);
                                setShowTime(booking.show_time);
                                setBookedSeats(prev =>
                                    prev.filter(seat => !seats.includes(seat))
                                );
                            }}
                            style={{ marginRight: "10px" }}
                        >
                            Edit
                        </Button>

                        <Button
                            variant="danger"
                            onClick={() => handleDelete(booking.id)}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookingPage;