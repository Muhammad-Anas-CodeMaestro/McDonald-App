import { useState } from "react";
import Header from "../componets/Header";
import Slider from "../componets/SideBar";
import Table from "../componets/Table";
import TicketHeader from "../componets/TicketHeader";
import ReusableTicketModal from "../componets/ReusableTicketModal";
import TicketDetailsView from "../componets/TicketDetailsView";
import { tableHeaders, tableData } from "../data/inProgressTableValue";

export default function MyTickets() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsTicketModalOpen(true);
  };

  const closeTicketModal = () => {
    setIsTicketModalOpen(false);
    setSelectedTicket(null);
  };

  return (
    <div className="flex h-screen">
      <div>
        <Slider />
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6">
          <h2 className="font-semibold text-2xl">My Tickets</h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <TicketHeader />
            <Table headers={tableHeaders} data={tableData} onAction={handleViewTicket} />
            <ReusableTicketModal
              open={isTicketModalOpen}
              onCancel={closeTicketModal}
              title="View Ticket"
              mode="view"
              showFooter={false}
              width={900}
            >
              <TicketDetailsView ticket={selectedTicket} />
            </ReusableTicketModal>
          </div>
        </div>
      </div>
    </div>
  );
}
