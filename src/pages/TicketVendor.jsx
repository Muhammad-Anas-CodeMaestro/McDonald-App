import { useState } from "react";
import Header from "../componets/Header";
import MainTable from "../componets/MainTable";
import SideBar from "../componets/SideBar";
import TicketHeader from "../componets/TicketHeader";
import { ticketVendorTableHeaders } from "../data/tableValues";
import { vendorData } from "../data/ticketVendor";
import ReusableTicketModal from "../componets/ReusableTicketModal";
import TicketDetailsView from "../componets/TicketDetailsView";
import VendorFollowUpSection from "../componets/VendorFollowUpSection";

export default function TicketVendor ()
{
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)

  const handleTicketModal = (ticket) =>
  {
    setSelectedTicket(ticket)
    setIsTicketModalOpen(true)
  }

  const closeTicketModal = () =>
  {
    setIsTicketModalOpen(false)
    setSelectedTicket(null)
  }

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <div className='flex flex-col gap-4 w-full h-full bg-slate-100 py-2 p-4 pr-6'>
          <h2 className='font-semibold text-2xl'>Ticket At Vendor</h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <TicketHeader showTabs={ false } />
            <MainTable headers={ ticketVendorTableHeaders } data={ vendorData } onAction={ handleTicketModal } />
            <ReusableTicketModal
              open={ isTicketModalOpen }
              onCancel={ closeTicketModal }
              title="Vendor Follow-Up"
              mode="view"
              cancelLabel="Close"
              width={ 900 }
            >
              <TicketDetailsView
                ticket={ selectedTicket }
                extraSection={<VendorFollowUpSection />}
              />
            </ReusableTicketModal>
          </div>
        </div>
      </div>
    </div>
  )
}