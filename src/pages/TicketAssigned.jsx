import Header from "../componets/Header";
import MainTable from "../componets/MainTable";
import SideBar from "../componets/SideBar";
import TicketHeader from "../componets/TicketHeader";
import { mainTicketTableHeader, AssignedTicketData } from '../data/assignedTickets'

export default function TicketAssigned ()
{
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
            <MainTable headers={mainTicketTableHeader} data={AssignedTicketData}/>
          </div>
        </div>
      </div>
    </div>
  )
}