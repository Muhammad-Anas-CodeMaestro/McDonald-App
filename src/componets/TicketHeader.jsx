import { useState } from "react";
import upload from '/upload.png'
import download from '/download.png'
import view from "/view.png"
import deleteicon from "/delete.png"
import slider from '/slider.png'
import search from "/search.png"
import sms_tracking from "/sms_tracking.png"
import sms_star from "/sms_star.png";
import sms_minus from "/sms_minus.png"
import SCV_icon from "/SCV_icon.png"
import create_ticket from "/create_ticket.png"
import { useLocation, useNavigate } from 'react-router-dom';
import TicketFormFields from '../foam/TicketFormFields.jsx';
import ReusableTicketModal from './ReusableTicketModal.jsx';

export default function TicketHeader ({ showTabs = true })
{
  const navigate = useNavigate()
  const location = useLocation();
  const routeCheck = location.pathname.toLowerCase()
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [modalMode, setModalMode] = useState('create');
  const [formData, setFormData] = useState({
    userName: '',
    userLocation: '',
    department: '',
    issue: '',
    mainCategory: '',
    secondCategory: '',
    title: '',
    description: '',
  });

  const [filterState, setFilterState] = useState({
    ticketStatus: 'ticketStatus',
    duration: 'selectdaterange',
  });

  const filterData = [
    {
      name: 'ticketStatus',
      label: 'Ticket Status',
      type: 'select',
      options: [
        { value: 'ticketStatus', label: 'Ticket Status' },
        { value: 'inprogress', label: 'In Progress' },
        { value: 'onhold', label: 'On Hold' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'duration',
      label: 'Duration',
      type: 'select',
      options: [
        { value: 'selectdaterange', label: 'Select Date Range' },
        { value: 'last7days', label: 'Last 7 Days' },
        { value: 'last15days', label: 'Last 15 Days' },
        { value: 'last30days', label: 'Last 30 Days' },
      ],
      gridClassName: 'md:col-span-1',
    }
  ];

  const handleFilterChange = (name) => (e) =>
  {
    setFilterState((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const ticketFields = [
    {
      name: 'userName',
      label: 'User Name',
      type: 'text',
      placeholder: 'Saif Khan',
      required: true,
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'userLocation',
      label: 'User Location',
      type: 'text',
      placeholder: 'Barkat Market',
      required: true,
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'department',
      label: 'Department',
      type: 'text',
      placeholder: 'Finance',
      required: true,
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'issue',
      label: 'Select Issue',
      type: 'select',
      options: [
        { value: '-select-', label: '-select-' },
        { value: 'printer', label: 'Printer' },
        { value: 'network', label: 'Network' },
        { value: 'hardware', label: 'Hardware' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'mainCategory',
      label: 'Ticket Main Category',
      type: 'select',
      options: [
        { value: '', label: 'Select category' },
        { value: 'it', label: 'IT' },
        { value: 'ops', label: 'Operations' },
        { value: 'admin', label: 'Administration' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'secondCategory',
      label: 'Ticket 2nd Category',
      type: 'select',
      options: [
        { value: '', label: 'Select category' },
        { value: 'software', label: 'Software' },
        { value: 'hardware', label: 'Hardware' },
        { value: 'service', label: 'Service' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'title',
      label: 'Ticket Title',
      type: 'text',
      placeholder: 'Ticket title comes here...',
      required: true,
      gridClassName: 'md:col-span-3',
    },
    {
      name: 'description',
      label: 'Ticket Description',
      type: 'textarea',
      placeholder: 'My printer is not turning on.',
      required: true,
      rows: 4,
      gridClassName: 'md:col-span-3',
    },
  ];

  const items = [
    {
      key: 'in-progress',
      img: sms_tracking,
      alt: 'sms_tracking',
      text: 'In-Progress',
      route: '/mytickets/inprogress'
    },
    {
      key: 'resolved',
      img: sms_star,
      alt: 'sms_star',
      text: 'Resolved',
      route: '/mytickets/resolved'
    },
    {
      key: 'closed',
      img: sms_minus,
      alt: 'sms_minus',
      text: 'Closed',
      route: '/mytickets/closed'
    }
  ];

  const handleFieldChange = (name) => (e) =>
  {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if (modalMode === 'view') {
      setIsFormOpen(false);
      return;
    }

    alert(`Ticket "${ formData.title }" created successfully.`);
    setFormData({
      userName: 'Saif Khan',
      userLocation: 'Barkat Market',
      department: 'Finance',
      issue: '-select-',
      mainCategory: '',
      secondCategory: '',
      title: '',
      description: '',
    });
    setIsFormOpen(false);
  };

  return (
    <div className={ `w-full` }>
      <div className="flex justify-between w-full items-center border-b pb-2 border-slate-200">
        { showTabs ? (
          <div className="flex justify-center gap-3">
            { items.map((item) =>
            {
              const isActive = routeCheck === item.route;
              const itemClass = `flex items-center cursor-pointer rounded-lg px-3 py-2 ${ isActive ? 'border-b-2 border-yellow-500 text-yellow-500 rounded-b-sm' : 'text-gray-700 hover:bg-slate-100' }`;
              return (
                <div className={ itemClass } key={ item.key } onClick={ () => navigate(item.route) }>
                  <img
                    src={ item.img }
                    alt={ item.alt }
                    style={ isActive ? { filter: 'brightness(0) saturate(100%) invert(77%) sepia(88%) saturate(1000%) hue-rotate(355deg) brightness(102%)' } : undefined }
                  />
                  <h4 className={ `font-light pl-2` }>{ item.text }</h4>
                </div>
              )
            }) }
          </div>
        ) : (
          <div className="flex items-center gap-2">

          </div>
        ) }
        <div className="flex items-center gap-3">

          <img src={ slider } alt="sliderForFilter" onClick={ () => setIsFilterOpen((prev) => !prev) } className="cursor-pointer" />
          <button
            type="button"
            className="flex items-center bg-yellow-500 py-2 px-5 rounded-lg cursor-pointer"
            onClick={ () => setIsFormOpen(true) }
          >
            <img src={ create_ticket } alt="createticketicon" />
            <span className="font-light px-3">New Ticket</span>
          </button>
        </div>
      </div>
      <div className={ `grid w-full overflow-hidden min-h-0 transition-all duration-1000 ease-in-out ${ isFilterOpen ? "grid-rows-[1fr] opacity-100 py-3" : "grid-rows-[0fr] opacity-0 py-0" }` }>
        <div className="overflow-hidden flex items-end justify-center gap-2 border-b border-slate-200 bg-white p-2">
          <div className="flex">
            <TicketFormFields
              fields={ filterData }
              formData={ filterState }
              onFieldChange={ handleFilterChange }
              className="grid-cols-1 gap-4 md:grid-cols-2"
            />
          </div>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-yellow-500 px-4 text-sm font-semibold gap-3"
          >
            <img src={ search } alt="searchicon" />
            Filter Tickets
          </button>
        </div>
      </div>
      <ReusableTicketModal
        open={ isFormOpen }
        onCancel={ () => setIsFormOpen(false) }
        title={ modalMode === 'view' ? 'Ticket Details' : 'New Ticket' }
        mode={ modalMode }
        onSubmit={ handleSubmit }
        submitLabel={ modalMode === 'view' ? 'Close' : 'Create Ticket' }
        cancelLabel="Cancel"
        width={ 900 }
      >
        <form className="space-y-2" onSubmit={ handleSubmit }>
          <TicketFormFields
            fields={ ticketFields }
            formData={ formData }
            onFieldChange={ handleFieldChange }
            className="grid-cols-1 md:grid-cols-3"
          />

          <div className="mt-5 border border-slate-200 p-2  ">
            <div className=" flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base font-semibold">Attach Documents/Image</p>
            </div>

            <div className="grid gap-2 lg:grid-cols-[1.5fr_auto]">
              <div className="grid gap-2 sm:grid-cols-10">
                <div className="sm:col-span-3 flex flex-col gap-2">
                  <label className="text-sm font-light text-slate-700">Document/Image Name</label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 bg-white p-2 text-sm focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-light text-slate-700">Attach Document</label>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 border border-slate-300 bg-white p-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <img src={ upload } alt="uploadicon" />
                    Upload
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-2 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="border border-slate-300 px-4 py-3 text-left">Document/Image Name</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Download</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">View</th>
                    <th className="border border-slate-300 px-4 py-3 text-left">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Manager Permission Letter</td>
                    <td className="border border-slate-300 px-4 py-3 items-center">
                      <img src={ download } alt="downloadicon" />
                    </td>
                    <td className="border border-slate-300 px-4 py-3">
                      <img src={ view } alt="viewicone" />
                    </td>
                    <td className="border border-slate-300 px-4 py-3">
                      <img src={ deleteicon } alt="deleteicon" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </ReusableTicketModal>
    </div>
  )
}