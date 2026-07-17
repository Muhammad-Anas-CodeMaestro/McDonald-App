import { useState } from "react";
import Header from "../componets/Header";
import MainTable from "../componets/MainTable";
import SideBar from "../componets/SideBar";
import TicketHeader from "../componets/TicketHeader";
import { mainTicketTableHeader, newTicketData } from "../data/NewTicketData";
import ReusableTicketModal from "../componets/ReusableTicketModal";
import TicketDetailsView from "../componets/TicketDetailsView";
import { useAuth } from "../context/AuthContext";

export default function TicketsNew ()
{
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const { user } = useAuth();

  const handleViewTicket = (ticket) =>
  {
    setSelectedTicket(ticket);
    setIsTicketModalOpen(true)
  }

  const closeTicketModal = () =>
  {
    setIsTicketModalOpen(false)
    setSelectedTicket(null)
  }

  const ticketHistoryDummyData = [
    {
      date: '14/05/05',
      time: '12:30',
      event: 'Created',
      user: 'Saif Khan',
      status: 'default' // Can be 'success', 'error', 'default', 'pending'
    },
    {
      date: '14/05/05',
      time: '14:00',
      event: 'Assigned',
      user: 'Adam Smith',
      status: 'default'
    },
    {
      date: '15/05/05',
      time: '15:30',
      event: 'Send to Vendor',
      user: 'Adam Smith',
      status: 'default'
    },
    {
      date: '17/05/05',
      time: '11:15',
      event: 'Resolved',
      user: 'Adam Smith',
      status: 'success' // Example of a different status
    },
    {
      date: '18/05/05',
      time: '16:30',
      event: 'Closed',
      user: 'Saif Khan',
      status: 'default'
    },
  ];

  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div className='flex flex-col w-full'>
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6">
          <h2 className="font-semibold text-2xl">My Tickets</h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <TicketHeader />
            <MainTable headers={ mainTicketTableHeader } data={ newTicketData } onAction={ handleViewTicket } />
            <ReusableTicketModal
              open={ isTicketModalOpen }
              onCancel={ closeTicketModal }
              title={ user.roleId === 3 ? "Pick Ticket" : "Assign Ticket" }
              mode="view"
              cancelLabel="Close"
              width={ 900 }
            >
              <TicketDetailsView
                ticket={ selectedTicket }
                history={ticketHistoryDummyData}
              />
            </ReusableTicketModal>
          </div>
        </div>
      </div>
    </div>
  )
}