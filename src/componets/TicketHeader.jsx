import { useState } from "react";
import upload from '/upload.png'
import download from '/download.png'
import view from "/view.png"
import deleteicon from "/delete.png"
import x_mark from '/x_mark.png'
import slider from '/slider.png'
import search from "/search.png"
import sms_tracking from "/sms_tracking.png"
import sms_star from "/sms_star.png";
import sms_minus from "/sms_minus.png"
import SCV_icon from "/SCV_icon.png"
import create_ticket from "/create_ticket.png"
import { useLocation, useNavigate } from 'react-router-dom';
import TicketFormFields from '../foam/TicketFormFields.jsx';

export default function TicketHeader ()
{
  const navigate = useNavigate()
  const location = useLocation();
  const routeCheck = location.pathname.toLowerCase();
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
        <div className="flex justify-center gap-3">
          { items.map((item) =>
          {
            const isActive = routeCheck === item.route;
            const itemClass = `flex items-center cursor-pointer rounded-lg px-3 py-2 ${ isActive ? 'text-yellow-500 underline decoration-yellow-500 underline-offset-4' : 'text-gray-700 hover:bg-slate-100' }`;
            return (
              <div className={ itemClass } key={ item.key } onClick={ () => navigate(item.route) }>
                <img src={ item.img } alt={ item.alt } />
                <h4 className={ `font-light pl-2` }>{ item.text }</h4>
              </div>
            )
          }) }
        </div>
        <div className="flex items-center gap-4">
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
      <div className="flex justify-between items-center mt-2">
        <div>
          <h3 className="text-sm font-light pl-10">entries per page</h3>
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <img src={ SCV_icon } alt="scv_icon" className="h-7" />
          <input type="search" placeholder="Search" className="bg-gray-200 border border-gray-300 rounded-sm p-2 min-w-0" />
        </div>
      </div>
      { isFormOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <div className="w-full max-w-3xl max-h-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between rounded-t-2xl bg-yellow-500 px-4 py-1">
              <h3 className="text-xl font-semibold m-0 p-0">New Ticket</h3>
              <button
                type="button"
                className="text-slate-800"
                onClick={ () => setIsFormOpen(false) }
              >
                <img src={ x_mark } alt="close_mark" className="h-3" />
              </button>
            </div>

            <div className="max-h-[85vh] overflow-y-auto p-4">
              <form className="space-y-2" onSubmit={ handleSubmit }>
                <TicketFormFields
                  fields={ ticketFields }
                  formData={ formData }
                  onFieldChange={ handleFieldChange }
                  className="grid-cols-1 md:grid-cols-3"
                />

                <div className="border border-slate-200 p-2 mt-5">
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

                <div className="flex flex-col items-center justify-center gap-2 w-full sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    className="border border-slate-400 px-5 py-2 text-sm font-medium text-slate-700"
                    onClick={ () => setIsFormOpen(false) }
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm"
                  >
                    Create Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null }
    </div>
  )
}