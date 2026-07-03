import React from 'react';
import McDonaldWRBG from '/McDonaldWRB.jpg';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faBars, faBell, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SideBar () {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const items = [
    { key: 'dashboard', icon: faBars, text: 'Dashboard', route: '/dashboard' },
    { key: 'mytickets', icon: faTicket, text: 'My Tickets', route: '/mytickets/inprogress' },
    { key: 'notifications', icon: faBell, text: 'Notifications', route: '/notifications' },
  ];

  return (
    <div className={`flex justify-between ${currentPath === '/dashboard' ? 'bg-gray-200' : 'bg-slate-100'} p-4 w-full h-full`}>
      <div className='flex flex-col gap-1 items-center w-full'>
        <img src={ McDonaldWRBG } alt="McDonald's Logo" className='w-10' />
        <h2 className='font-medium text-xl'>McDonald's</h2>
        <div className='flex flex-col py-3 font-light text-sm w-full gap-3'>
          {items.map((item) => {
            const isActive = currentPath === item.route;
            const itemClass = `flex items-center gap-2 pl-2 cursor-pointer w-full py-2 pr-18 rounded-lg ${isActive ? 'bg-yellow-400 text-black' : ''}`;
            return (
              <div key={item.key} className={itemClass} onClick={() => navigate(item.route)}>
                <FontAwesomeSvgIcon icon={item.icon} className='h-6 w-6' />
                <h2>{item.text}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}