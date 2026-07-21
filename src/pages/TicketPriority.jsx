import { useState } from 'react';
import Header from '../componets/Header.jsx';
import SideBar from '../componets/SideBar.jsx';
import ConfigPageHeader from '../componets/ConfigPageHeader.jsx';
import ReusableTicketModal from '../componets/ReusableTicketModal.jsx';
import TicketFormFields from '../form/TicketFormFields.jsx';
import MainTable from '../componets/MainTable.jsx';
import { useFormState } from '../hooks/useFormState.js';

const TABLE_HEADERS = ['Serial #', 'Ticket Priority', 'Turnaround Time (TAT)', 'Status'];
const TABLE_DATA = [
  ['01', 'High', '1 hr','Active'],
  ['02', 'Medium', '3 hrs','Active'],
  ['03', 'Low', '5 hrs','Active'],
];

export default function TicketPriority ()
{
  return (
    <div className="flex min-h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6 overflow-auto">
          <h2 className="font-semibold text-2xl">
            Ticket Priority —{ ' ' }
            <span className="font-normal">Configurations</span>
          </h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <div className="mt-4">
              <MainTable
                headers={ TABLE_HEADERS }
                data={ TABLE_DATA }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
