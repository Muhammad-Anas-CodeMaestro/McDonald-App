import Header from "../componets/Header";
import SideBar from "../componets/SideBar";
import Table from "../componets/Table";
import TicketHeader from "../componets/TicketHeader";

export default function Notification ()
{
  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex-col w-full">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6">
          <h2 className="font-semibold text-2xl">Notifications</h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <TicketHeader />
            <Table/>
          </div>
        </div>
      </div>
    </div>
  )
}