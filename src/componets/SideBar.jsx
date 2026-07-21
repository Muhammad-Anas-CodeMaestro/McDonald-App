import React, { useState } from 'react';
import McDonaldWRBG from '/McDonaldWRB.jpg';
import dashboard from "/dashboard.png"
import ticketstar from "/ticketstar.png"
import notification from "/notification.png"
import ticket_vendor from "/ticket_vendor.png"
import reports from "/reports.png"
import emailticket from "/email_ticket.png"
import { useNavigate, useLocation, Routes } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"
import config from '/setting.png'
import arrow_down from '/arrow_down.png'

export default function SideBar ()
{
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const { user } = useAuth();
  const userRoleId = user?.roleId;
  const [openMenu, setOpenMenu] = useState(null);

  const items = [
    {
      key: 'dashboard', img: dashboard, alt: "dashboaricon", text: 'Dashboard', route: '/dashboard', matchRoutes: ["/dashboard"], roles: [4, 3, 2, 1]
    },
    {
      key: 'mytickets', img: ticketstar, alt: "ticketstaticon", text: 'My Tickets', route: '/mytickets/inprogress', matchRoutes: ["/mytickets"], roles: [4]
    },
    {
      key: 'ticket', img: ticketstar, alt: "ticketicon", text: 'Tickets', route: '/tickets/new', matchRoutes: ["/tickets"], roles: [3]
    },
    {
      key: 'ticket', img: ticketstar, alt: "ticketicon", text: 'Tickets', route: '/tickets/alltickets', matchRoutes: ["/tickets"], roles: [2]
    },
    {
      key: 'ticket', img: ticketstar, alt: "ticketicon", text: 'Tickets', route: '/tickets/new', matchRoutes: ["/tickets"], roles: [1]
    },
    {
      key: 'reopenrequest', img: ticketstar, alt: "ticketicon", text: 'Re-Open Request', route: '/reopenrequest', matchRoutes: ["/reopenrequest"], roles: [2, 1]
    },
    {
      key: 'ticketsvendor', img: ticket_vendor, alt: "ticketvendoricon", text: 'Tickets At Vendor', route: '/ticketvendor/', matchRoutes: ["/ticketvendor"], roles: [3, 2, 1]
    },
    {
      key: 'emailtickets', img: emailticket, alt: "emailticketicon", text: 'Email Tickets', route: '/emailtickets', matchRoutes: ["/emailtickets"], roles: [2, 1]
    },
    {
      key: 'notifications', img: notification, alt: "notificationicon", text: 'Notifications', route: '/notifications', matchRoutes: ["/notifications"], roles: [4, 3, 2, 1]
    },
    {
      key: 'reports', img: reports, alt: "reporticon", text: 'Reports', route: '/reports', matchRoutes: ["#"], roles: [3, 2, 1], hasArrow: true, submenu: []
    },
    {
      key: 'configurations', img: config, alt: "configicon", text: 'Configurations', matchRoutes: ["/config"], roles: [1],
      submenu: [
        {
          key: "ticketmaincategory",
          text: "Ticket Main Category",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/maincategory",
        },
        {
          key: "secondcategory",
          text: "Ticket 2nd Category",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/secondcategory",
        },
        {
          key: "thirdcategory",
          text: "Ticket 3rd Category",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/thirdcategory",
        },
        {
          key: "tickettype",
          text: "Ticket Type",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/tickettype",
        },
        {
          key: "vendor",
          text: "Vendor",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/vendor",
        },
        {
          key: "user&role",
          text: "User & Role",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/userrole",
        },
        {
          key: "agentgroup",
          text: "Agent Group",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/agentgroup",
        },
        {
          key: "tikcetpriority",
          text: "Ticket Priority",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/ticketpriority",
        },
        {
          key: "resolutioncomments",
          text: "Resolution Comments",
          img: "/circle_black.png",
          alt: "circleIcone",
          route: "/configurations/resolutioncomments",
        },
      ]
    },
  ];

  const filteredItems = items.filter(
    item => item.roles.includes(userRoleId)
  )

  return (
    <div className={ `flex flex-col items-center ${ currentPath === '/dashboard' ? 'bg-gray-200' : 'bg-slate-100' } p-4 w-60 min-h-full` }>
      <div className='flex flex-col gap-1 items-center w-full'>
        <img src={ McDonaldWRBG } alt="McDonald's Logo" className='w-10' />
        <h2 className='font-medium text-xl'>McDonald's</h2>
        <div className='flex flex-col font-light text-sm w-full gap-2'>
          { filteredItems.map((item) =>
          {
            const isActive = (item.matchRoutes ?? [item.route]).some(
              route => currentPath.startsWith(route)
            )
            const itemClass = `flex items-center justify-between gap-2 px-2 cursor-pointer w-full py-2 rounded-sm ${ isActive ? 'bg-yellow-400 text-black' : '' }`;
            return (
              <div key={ item.key }>
                <div className={ itemClass }
                  onClick={ () =>
                  {
                    if (item.submenu) {
                      setOpenMenu(openMenu === item.key ? null : item.key)
                    } else {
                      navigate(item.route)
                    }
                  } }
                >
                  <div className="flex items-center gap-2">
                    <img src={ item.img } alt={ item.alt } className='h-5 w-5' />
                    <span> { item.text } </span>
                  </div>
                  { item.submenu && (
                    <img src={ arrow_down } alt="arrow_down_icon" className={ `w-4 h-4 transition-transform duration-300 ${ openMenu === item.key ? "rotate-180" : ""
                      }` }
                    />
                  ) }
                </div>
                {
                  item.submenu && openMenu === item.key && (
                    <div className='flex flex-col items-center'>
                      { item.submenu.map((sub) => (
                        <div onClick={ () => { navigate(sub.route) } }
                          className={ `w-full text-center py-2 px-1 rounded cursor-pointer text-sm pl-3 ${ currentPath === sub.route ? "bg-yellow-300 font-medium" : "" }` }
                          key={ sub.key }
                        >
                          <div className="flex items-center gap-2">
                            <img src={ sub.img } alt={ sub.alt } className='h-2 w-2' />
                            <span> { sub.text } </span>
                          </div>
                        </div>
                      )) }
                    </div>
                  )
                }
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  );
}