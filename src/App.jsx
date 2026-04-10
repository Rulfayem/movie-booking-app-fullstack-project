import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;