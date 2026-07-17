import React from 'react';
import McDonaldWRBG from '/McDonaldWRB.jpg';
import dashboard from "/dashboard.png"
import ticketstar from "/ticketstar.png"
import notification from "/notification.png"
import ticket_vendor from "/ticket_vendor.png"
import reports from "/reports.png"
import emailticket from "/email_ticket.png"
import { useNavigate, useLocation, Routes } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"

export default function SideBar ()
{
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const { user } = useAuth();
  const userRoleId = user?.roleId;

  const items = [
    {
      key: 'dashboard', img: dashboard, alt: "dashboaricon", text: 'Dashboard', route: '/dashboard', matchRoutes: [ "/dashboard"], roles: [4, 3, 2, 1]
    },
    { key: 'mytickets', img: ticketstar, alt: "ticketstaticon", text: 'My Tickets', route: '/mytickets/inprogress', matchRoutes: [ "/mytickets"], roles: [4] },
    { key: 'ticket', img: ticketstar, alt: "ticketicon", text: 'Tickets', route: '/tickets/new', matchRoutes: ["/tickets"], roles: [3] },
    { key: 'ticket', img: ticketstar, alt: "ticketicon", text: 'Tickets', route: '/tickets/alltickets', matchRoutes: ["/tickets"], roles: [2] },
    { key: 'reopenrequest', img: ticketstar, alt: "ticketicon", text: 'Re-Open Request', route: '/reopenrequest', matchRoutes: ["/reopenrequest"], roles: [2] },
    { key: 'ticketsvendor', img: ticket_vendor, alt: "ticketvendoricon", text: 'Tickets At Vendor', route: '/ticketvendor/', matchRoutes: [ "/ticketvendor"], roles: [3, 2] },
    { key: 'emailtickets', img: emailticket, alt: "emailticketicon", text: 'Email Tickets', route: '/emailtickets', matchRoutes: ["/emailtickets"], roles: [2] },
    { key: 'notifications', img: notification, alt: "notificationicon", text: 'Notifications', route: '/notifications', matchRoutes: [ "/notifications"], roles: [4, 3, 2] },
    { key: 'reports', img: reports, alt: "reporticon", text: 'Reports', route: '/reports', matchRoutes: [ "/reports"], roles: [3, 2] },
  ];

  const filteredItems = items.filter(
    item => item.roles.includes(userRoleId)
  )

  return (
    <div className={ `flex flex-col items-center ${ currentPath === '/dashboard' ? 'bg-gray-200' : 'bg-slate-100' } p-4 w-52 min-h-full` }>
      <div className='flex flex-col gap-1 items-center w-full'>
        <img src={ McDonaldWRBG } alt="McDonald's Logo" className='w-10' />
        <h2 className='font-medium text-xl'>McDonald's</h2>
        <div className='flex flex-col py-3 font-light text-sm w-full gap-3'>
          { filteredItems.map((item) =>
          {
            const isActive = (item.matchRoutes ?? [item.route]).some(
              route => currentPath.startsWith(route)
            )
            const itemClass = `flex items-center gap-2 pl-2 cursor-pointer w-full py-2 rounded-sm ${ isActive ? 'bg-yellow-400 text-black' : '' }`;
            return (
              <div key={ item.key } className={ itemClass } onClick={ () => navigate(item.route) }>
                <img src={ item.img } alt={ item.alt } className='h-5 w-5' />
                <span> { item.text } </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}