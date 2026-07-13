import React from 'react';
import McDonaldWRBG from '/McDonaldWRB.jpg';
import dashboard from "/dashboard.png"
import ticketstar from "/ticketstar.png"
import notification from "/notification.png"
import ticket_vendor from "/ticket_vendor.png"
import reports from "/reports.png"
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"

export default function SideBar ()
{
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const { user } = useAuth();
  const userRole = user?.role;


  const items = [
    { key: 'dashboard', img: dashboard, alt: "dashboaricon", text: 'Dashboard', route: '/dashboard', roles: ["User", "Support Agent"] },
    { key: 'mytickets', img: ticketstar, alt: "ticketstaticon", text: 'My Tickets', route: '/mytickets/inprogress', roles: ["User"] },
    { key: 'ticket', img: ticketstar, alt: "ticketicon", text: 'Tickets', route: '/tickets/new', roles: ["Support Agent"] },
    { key: 'ticketsvendor', img: ticket_vendor, alt: "ticketvendoricon", text: 'Tickets At Vendor', route: '/ticketvendor/', roles: ["Support Agent"] },
    { key: 'notifications', img: notification, alt: "notificationicon", text: 'Notifications', route: '/notifications', roles: ["User", "Support Agent"] },
    { key: 'reports', img: reports, alt: "reporticon", text: 'Reports', route: '/reports', roles: ["Support Agent"] },
  ];

  const filteredItems = items.filter(
    item => item.roles.includes(userRole)
  )

  return (
    <div className={ `flex flex-col items-center ${ currentPath === '/dashboard' ? 'bg-gray-200' : 'bg-slate-100' } p-4 w-52 h-full` }>
      <div className='flex flex-col gap-1 items-center w-full'>
        <img src={ McDonaldWRBG } alt="McDonald's Logo" className='w-10' />
        <h2 className='font-medium text-xl'>McDonald's</h2>
        <div className='flex flex-col py-3 font-light text-sm w-full gap-3'>
          { filteredItems.map((item) =>
          {
            const isActive = item.key === 'mytickets'
              ? currentPath === item.route || currentPath.startsWith('/mytickets')
              : currentPath === item.route;
            const itemClass = `flex items-center gap-2 pl-2 cursor-pointer w-full py-2 rounded-sm ${ isActive ? 'bg-yellow-400 text-black' : '' }`;
            return (
              <div key={ item.key } className={ itemClass } onClick={ () => navigate(item.route) }>
                <img src={ item.img } alt={ item.alt } className='h-5 w-5' />
                <span> { item.text } </span>
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  );
}