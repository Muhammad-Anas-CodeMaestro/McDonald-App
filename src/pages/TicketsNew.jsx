import Header from "../componets/Header";
import SideBar from "../componets/SideBar";
import TicketHeader from "../componets/TicketHeader";

export default function TicketsNew ()
{
  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div className='flex flex-col w-full'>
        <Header />
        <div className='flex flex-col gap-2 w-full h-full bg-gray-100 py-2 p-4 pr-6'>
          <h2 className='font-semibold text-2xl'>Tickets</h2>
          <TicketHeader />
        </div>
      </div>
    </div>
  )
}