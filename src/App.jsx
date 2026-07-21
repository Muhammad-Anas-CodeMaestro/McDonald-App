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
import TicketAssigned from "./pages/TicketAssigned";
import ReopenRequest from "./pages/ReopenRequest";
import EmailTickets from "./pages/EmailTickets";
import AllTickets from "./pages/AllTickets";
import MainCategory from "./pages/MainCategory";
import SecondCategory from "./pages/SecondCategory";
import ThirdCategory from "./pages/ThirdCategory";
import TicketType from "./pages/TicketType";
import ConfigVendor from "./pages/ConfigVendor";
import UserRole from "./pages/UserRole";
import TicketPriority from "./pages/TicketPriority";
import ResolComments from "./pages/ResolComments";
import AgentGroup from "./pages/AgentGroup";

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
          <Route path="/" element={ <Navigate to="/login" replace /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/usertypeselection" element={ <ProtectedRoute><UserTypeSelection /></ProtectedRoute> } />
          <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> } />
          <Route path="/mytickets/inprogress" element={ <ProtectedRoute><MyTickets /></ProtectedRoute> }/>
          <Route path="/mytickets/resolved" element={ <ProtectedRoute><Resolved /></ProtectedRoute> } />
          <Route path="/mytickets/closed" element={ <ProtectedRoute><Closed /></ProtectedRoute> } />
          <Route path="/tickets/new" element={ <ProtectedRoute><TicketsNew /></ProtectedRoute> }/>
          <Route path="/tickets/assignedtome" element={ <ProtectedRoute><TicketAssigned /></ProtectedRoute> }/>
          <Route path="/tickets/resolved" element={ <ProtectedRoute><Resolved /></ProtectedRoute> } />
          <Route path="/tickets/closed" element={ <ProtectedRoute><Closed /></ProtectedRoute> } />
          <Route path="/tickets/alltickets" element={ <ProtectedRoute><AllTickets /></ProtectedRoute> } />
          <Route path="/tickets/new" element={ <ProtectedRoute><AllTickets /></ProtectedRoute> } />
          <Route path="/tickets/inprogress" element={ <ProtectedRoute><MyTickets /></ProtectedRoute> }/>
          <Route path="/reopenrequest" element={ <ProtectedRoute><ReopenRequest /></ProtectedRoute> } />
          <Route path="/ticketvendor" element={ <ProtectedRoute><TicketVendor /></ProtectedRoute> }/>
          <Route path="/emailtickets" element={ <ProtectedRoute><EmailTickets /></ProtectedRoute> } />
          <Route path="/notifications" element={ <ProtectedRoute><Notification /></ProtectedRoute> } />
          <Route path="/configurations/maincategory" element={ <ProtectedRoute><MainCategory /></ProtectedRoute> } />
          <Route path="/configurations/secondcategory" element={ <ProtectedRoute><SecondCategory /></ProtectedRoute> } />
          <Route path="/configurations/thirdcategory" element={ <ProtectedRoute><ThirdCategory /></ProtectedRoute> } />
          <Route path="/configurations/tickettype" element={ <ProtectedRoute><TicketType /></ProtectedRoute> } />
          <Route path="/configurations/vendor" element={ <ProtectedRoute><ConfigVendor /></ProtectedRoute> } />
          <Route path="/configurations/userrole" element={ <ProtectedRoute><UserRole /></ProtectedRoute> } />
          <Route path="/configurations/agentgroup" element={ <ProtectedRoute><AgentGroup /></ProtectedRoute> } />
          <Route path="/configurations/ticketpriority" element={ <ProtectedRoute><TicketPriority /></ProtectedRoute> } />
          <Route path="/configurations/resolutioncomments" element={ <ProtectedRoute><ResolComments /></ProtectedRoute> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}