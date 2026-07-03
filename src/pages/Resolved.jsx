import Header from "../componets/Header";
import Slider from "../componets/SideBar";
import TicketFilter from "../componets/TickerFilter";

export default function Resolved ()
{
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
            <TicketFilter />
          </div>
        </div>
      </div>
    </div>
  )
}