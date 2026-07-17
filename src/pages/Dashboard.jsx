import React from 'react';
import McDonaldM from '/McDonaldM.png';
import SideBar from '../componets/SideBar';
import DashboardCard from '../componets/DashboardCard';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faBars, faCheckDouble, faFileCirclePlus, faFileCircleXmark, faListCheck } from '@fortawesome/free-solid-svg-icons';
import Header from '../componets/Header';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, DatePicker } from 'antd';
import { Column } from '@ant-design/charts';
import Analytics from '../componets/Analytics';
import { useAuth } from '../context/AuthContext';


export default function Dashboard ()
{
  const { user } = useAuth();
  const canViewAnalytics = user?.roleId === 1 || user?.roleId === 2;
  const taskCards = [
    {
      icon: faFileCirclePlus,
      title: 'New',
      value: '2',
      bgClass: 'bg-sky-100',
      titleColorClass: 'text-cyan-500',
      iconColorClass: 'text-cyan-500',
      bubbleColorClass: 'bg-cyan-300',
    },
    {
      icon: faListCheck,
      title: 'In-progress',
      value: '4',
      bgClass: 'bg-green-100',
      titleColorClass: 'text-green-600',
      iconColorClass: 'text-green-600',
      bubbleColorClass: 'bg-green-400',
    },
    {
      icon: faCheckDouble,
      title: 'Resolved',
      value: '26',
      bgClass: 'bg-blue-100',
      titleColorClass: 'text-blue-700',
      iconColorClass: 'text-blue-700',
      bubbleColorClass: 'bg-cyan-200',
    },
    {
      icon: faFileCircleXmark,
      title: 'Closed',
      value: '37',
      bgClass: 'bg-rose-200',
      titleColorClass: 'text-rose-700',
      iconColorClass: 'text-rose-700',
      bubbleColorClass: 'bg-rose-400',
    },
  ];

  return (
    <div className='flex min-h-screen'>
      <div className='self-stretch'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full'>
        <Header />
        <div className='flex flex-col gap-2 w-full h-full bg-gray-100 py-2 p-4 pr-6'>
          <h2 className='font-semibold text-2xl'>Dashboard</h2>
          <div>
            <h3 className='font-medium text-sm w-full text-center'>Task To be Done</h3>
            <div className='flex gap-4 py-4 w-full justify-center'>
              { taskCards.map((card) => (
                <DashboardCard key={ card.title } { ...card } />
              )) }
            </div>
          </div>
          { canViewAnalytics && <Analytics /> }
          { !canViewAnalytics && <div className='flex justify-center items-center w-full h-full'>
            { <img src={ McDonaldM } alt="McDon ald's Logo" className='w-1/4 opacity-20' /> }
          </div>}
        </div>
      </div>
    </div>
  );
}