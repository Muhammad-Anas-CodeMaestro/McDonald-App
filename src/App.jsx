import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import './index.css';
import MyTickets from "./pages/MyTickets";
import Resolved from "./pages/Resolved";
import Closed from "./pages/Closed";
import Notification from "./pages/Notification";
import AuthProvider, { useAuth } from "./context/AuthContext";
import UserTypeSelection from "./pages/UserTypeSelection";
import TicketsNew from "./pages/TicketsNew";
import TicketVendor from "./pages/TicketVendor";

function ProtectedRoute ({ children })
{
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default function App ()
{
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/usertypeselection" element={ <ProtectedRoute><UserTypeSelection /></ProtectedRoute> } />
          <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> } />
          <Route path="/mytickets/inprogress" element={ <ProtectedRoute><MyTickets /></ProtectedRoute> }/>
          <Route path="/mytickets/resolved" element={ <ProtectedRoute><Resolved /></ProtectedRoute> } />
          <Route path="/mytickets/closed" element={ <ProtectedRoute><Closed /></ProtectedRoute> } />
          <Route path="/notifications" element={ <ProtectedRoute><Notification /></ProtectedRoute> } />
          <Route path="/tickets/new" element={ <ProtectedRoute><TicketsNew /></ProtectedRoute> }/>
          <Route path="/ticketvendor" element={ <ProtectedRoute><TicketVendor /></ProtectedRoute> }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}