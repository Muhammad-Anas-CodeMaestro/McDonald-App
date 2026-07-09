import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import './index.css';
import MyTickets from "./pages/MyTickets";
import Resolved from "./pages/Resolved";
import Closed from "./pages/Closed";
import Notification from "./pages/Notification";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/mytickets/inprogress" element={<ProtectedRoute><MyTickets /></ProtectedRoute>} />
        <Route path="/mytickets/resolved" element={<ProtectedRoute><Resolved /></ProtectedRoute>} />
        <Route path="/mytickets/closed" element={<ProtectedRoute><Closed /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}