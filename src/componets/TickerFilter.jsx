import { faBarsProgress, faCheckDouble, faFileCircleXmark, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useLocation, useNavigate } from 'react-router-dom';

export default function TicketFilter ()
{
  const navigate = useNavigate()
  const location = useLocation();
  const routeCheck = location.pathname.toLowerCase();
  const items = [
    {
      key: 'in-progress',
      icon: faBarsProgress,
      text: 'In-Progress',
      route: '/mytickets/inprogress'
    },
    {
      key: 'resolved',
      icon: faCheckDouble,
      text: 'Resolved',
      route: '/mytickets/resolved'
    },
    {
      key: 'closed',
      icon: faFileCircleXmark,
      text: 'Closed',
      route: '/mytickets/closed'
    }
  ]
  return (
    <div className={`w-full`}>
      <div className="flex justify-between w-full items-center-safe">
        <div className="flex justify-center gap-3">
          { items.map((item) =>
          {
            const isActive = routeCheck === item.route;
            const itemClass = `flex items-center cursor-pointer rounded-lg px-3 py-2 ${isActive ? 'text-yellow-500 underline decoration-yellow-500 underline-offset-4' : 'text-gray-700 hover:bg-slate-100'}`;
            return (
              <div className={ itemClass } key={ item.key } onClick={()=>navigate(item.route)}>
                <FontAwesomeSvgIcon icon={ item.icon } className={`h-5 w-5`} />
                <h4 className={`font-light pl-2`}>{ item.text }</h4>
              </div>
            )
          }) }
        </div>
        <div className="flex items-center bg-yellow-500 py-2 px-5 rounded-lg cursor-pointer">
          <FontAwesomeSvgIcon icon={ faSquarePlus } className="h-5 w-5" />
          <button className="font-light px-3">New Ticket</button>
        </div>
      </div>
    </div>
  )
}