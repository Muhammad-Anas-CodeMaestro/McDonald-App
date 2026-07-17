import ReusableTicketModal from "./ReusableTicketModal";
import TicketHistory from "../componets/TicketHistory";
import { useAuth } from "../context/AuthContext";

const DEFAULT_TICKET_DETAILS = {
  userName: 'Saif Khan',
  userLocation: 'Barkat Market',
  serviceType: 'Service Request',
  description: 'My printer is not turning on.',
  commentPlaceholder: 'Comments comes here...',
  attachments: ['Manager Permission Letter'],
};

function TicketField ({ label, value, className = '' })
{
  return (
    <div className={ `flex flex-col gap-1 ${ className }`.trim() }>
      <label className="text-[11px] font-medium text-slate-800">{ label }</label>
      <input
        type="text"
        value={ value || '' }
        readOnly
        className="h-9 w-full border border-slate-300 bg-slate-200 text-xs text-slate-50 outline-none px-3"
      />
    </div>
  );
}

export default function TicketDetailsView ({ ticket, extraSection, history })
{
  if (!ticket) return null;

  const details = {
    ...DEFAULT_TICKET_DETAILS,
    ticketNumber: ticket['Ticket Number'],
    ticketDateTime: ticket['Ticket Create At'],
    ticketTitle: ticket['Ticket Title'],
    issue: ticket['3rd Category'],
    mainCategory: ticket['Main Category'],
    secondCategory: ticket['2nd Category'],
    status: ticket.Status,
    description: ticket.Description || DEFAULT_TICKET_DETAILS.description,
  };

  const { user } = useAuth();
  const isPrivileged = user.roleId === 1 || user.roleId === 2

  return (
    <form className="space-y-2 bg-white text-slate-900">
      <div className="grid gap-3 md:grid-cols-4">
        <TicketField label="Ticket Number" value={ details.ticketNumber } />
        <TicketField label="Ticket Date & Time" value={ details.ticketDateTime } />
        <TicketField label="User Name" value={ details.userName } />
        <TicketField label="User Location" value={ details.userLocation } />
        <TicketField label="Ticket Type" value={ details.serviceType } />
        <TicketField label="Ticket Title" value={ details.ticketTitle } />
        <TicketField label="Issue" value={ details.issue } />
        <TicketField label="Ticket Main Category" value={ details.mainCategory } />
        <TicketField label="Ticket 2nd Category" value={ details.secondCategory } />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[11px] font-medium text-slate-800">Ticket Description</label>
        <textarea
          value={ details.description }
          readOnly
          rows={ 6 }
          className="w-full resize-none border border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-500 outline-none"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_3fr]">
        <TicketField label="Ticket Status" value={ details.status } />
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-medium text-slate-800">Comments</label>
          <input
            type="text"
            placeholder={ details.commentPlaceholder }
            className="h-9 w-full border border-slate-300 bg-white px-4 text-xs text-slate-600 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <section className="border border-slate-200 px-3 py-3">
        <h3 className="text-sm font-semibold text-slate-900">User Attachments</h3>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-900">
                <th className="border border-slate-300 px-4 py-2 text-left font-medium">Document/Image Name</th>
                <th className="w-24 border border-slate-300 px-4 py-2 text-center font-medium">Download</th>
                <th className="w-20 border border-slate-300 px-4 py-2 text-center font-medium">View</th>
              </tr>
            </thead>
            <tbody>
              { details.attachments.map((attachment) => (
                <tr key={ attachment }>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">{ attachment }</td>
                  <td className="border border-slate-300 px-4 py-2 text-center">
                    <button type="button" aria-label={ `Download ${ attachment }` }>
                      <img src="/download.png" alt="downloadicon" />
                    </button>
                  </td>
                  <td className="border border-slate-300 px-4 py-2 text-center">
                    <button type="button" className="text-blue-500 hover:text-blue-600" aria-label={ `View ${ attachment }` }>
                      <img src="/view.png" alt="viewicon" />
                    </button>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </section>

      {extraSection}

      {isPrivileged && <TicketHistory history={history} />}
    </form>
  );
}
