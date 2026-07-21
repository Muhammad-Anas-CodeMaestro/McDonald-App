import { useState } from "react";
import upload from '/upload.png'
import download from '/download.png'
import view from "/view.png"
import deleteicon from "/delete.png"
import slider from '/slider.png'
import search from "/search.png"
import sms_tracking from "/sms_tracking.png"
import resolved from "/sms_resolved.png";
import closed from "/sms_closed.png"
import SCV_icon from "/SCV_icon.png"
import create_ticket from "/create_ticket.png"
import { useLocation, useNavigate } from 'react-router-dom';
import TicketFormFields from '../form/TicketFormFields.jsx';
import ReusableTicketModal from './ReusableTicketModal.jsx';
import newIcon from '/sms.png'
import sms_notification from '/sms_notification.png'
import { useAuth } from "../context/AuthContext.jsx";

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
  const { user } = useAuth();
  const userRoleId = user?.roleId

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

  const userFields = [
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

  const supportFields = [
    {
      name: 'department',
      label: 'Department',
      type: 'select',
      type: 'select',
      options: [
        { value: 'Finance', label: 'Finance' },
        { value: 'SD', label: 'SD' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Networking', label: 'Networking' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'city',
      label: 'City',
      type: 'select',
      type: 'select',
      options: [
        { value: 'Lahore', label: 'Lahore' },
        { value: 'Karachi', label: 'Karachi' },
        { value: 'Islamabad', label: 'Islamabad' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'storeLocation',
      label: 'Store Location',
      type: 'select',
      type: 'select',
      options: [
        { value: 'Barkat Market', label: 'Barkat Makre' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'complainant',
      label: 'Complainant',
      placeholder: 'Saif Khan',
      type: 'text',
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'mainCategory',
      label: 'Ticket Main Category',
      type: 'select',
      type: 'select',
      options: [
        { value: 'IT', label: 'IT' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'secondCategory',
      label: 'Ticket 2nd Category',
      type: 'select',
      options: [
        { value: 'Hardware', label: 'Hardware' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'thirdCategory',
      label: 'Ticket 3rd Category',
      type: 'select',
      options: [
        { value: 'Mouse', label: 'Mouse' },
      ],
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'title',
      label: 'Ticket Title',
      type: 'text',
      placeholder: 'Ticket title comes here...',
      required: true,
      gridClassName: 'md:col-span-1',
    },
    {
      name: 'description',
      label: 'Ticket Description',
      type: 'textarea',
      placeholder: 'Describe issue...',
      rows: 4,
      required: true,
      gridClassName: 'md:col-span-4',
    },
  ];

  const items = [
    {
      key: 'allTickets',
      img: newIcon,
      alt: 'sms_icon',
      text: 'All Tickets',
      route: '/tickets/alltickets',
      roles: [2, 1]
    },
    {
      key: 'new',
      img: newIcon,
      alt: 'sms_icon',
      text: 'New',
      route: '/tickets/new',
      roles: [3, 2, 1]
    },
    {
      key: 'in-progress',
      img: sms_tracking,
      alt: 'sms_tracking',
      text: 'In-Progress',
      route: '/mytickets/inprogress',
      roles: [4]
    },
    {
      key: 'in-progress',
      img: sms_tracking,
      alt: 'sms_tracking',
      text: 'In-Progress',
      route: '/tickets/inprogress',
      roles: [2, 1]
    },
    {
      key: 'assignedToMe',
      img: sms_notification,
      alt: 'sms_notification',
      text: 'Assigned To Me',
      route: '/tickets/assignedtome',
      roles: [3, 2, 1]
    },
    {
      key: 'resolved',
      img: resolved,
      alt: 'resolved',
      text: 'Resolved',
      route: '/mytickets/resolved',
      roles: [4]
    },
    {
      key: 'closed',
      img: closed,
      alt: 'closed',
      text: 'Closed',
      route: '/mytickets/closed',
      roles: [4]
    },
    {
      key: 'resolved',
      img: resolved,
      alt: 'resolved',
      text: 'Resolved',
      route: '/tickets/resolved',
      roles: [3, 2, 1]
    },
    {
      key: 'closed',
      img: closed,
      alt: 'closed',
      text: 'Closed',
      route: '/tickets/closed',
      roles: [3, 2, 1]
    },
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

  const filteredItems = items.filter(
    item => item.roles.includes(userRoleId)
  )

  const ticketFields = userRoleId === 3 ? userFields : supportFields

  return (
    <div className={ `w-full` }>
      <div className="flex justify-between w-full items-center border-b pb-2 border-slate-200">
        { showTabs ? (
          <div className="flex justify-center gap-3">
            { filteredItems.map((item) =>
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
                  <span className="font-light pl-2" >{ item.text }</span>
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