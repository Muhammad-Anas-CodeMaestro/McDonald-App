import { useState } from "react";
import { faBarsProgress, faCheckDouble, faFileCircleXmark, faSquarePlus, faArrowDown, faEye, faTrash, faXmark, faArrowUpFromBracket, faSliders, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useLocation, useNavigate } from 'react-router-dom';
import TicketFormFields from '../foam/TicketFormFields.jsx';

export default function TicketHeader ()
{
  const navigate = useNavigate()
  const location = useLocation();
  const routeCheck = location.pathname.toLowerCase();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [formData, setFormData] = useState({
    userName: 'Saif Khan',
    userLocation: 'Barkat Market',
    department: 'Finance',
    issue: '-select-',
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
  ];

  const handleFieldChange = (name) => (e) =>
  {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
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
      <div className="flex justify-between w-full items-center-safe">
        <div className="flex justify-center gap-3">
          { items.map((item) =>
          {
            const isActive = routeCheck === item.route;
            const itemClass = `flex items-center cursor-pointer rounded-lg px-3 py-2 ${ isActive ? 'text-yellow-500 underline decoration-yellow-500 underline-offset-4' : 'text-gray-700 hover:bg-slate-100' }`;
            return (
              <div className={ itemClass } key={ item.key } onClick={ () => navigate(item.route) }>
                <FontAwesomeSvgIcon icon={ item.icon } className={ `h-5 w-5` } />
                <h4 className={ `font-light pl-2` }>{ item.text }</h4>
              </div>
            )
          }) }
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeSvgIcon icon={ faSliders } className="h-6 w-6 cursor-pointer" onClick={() => setIsFilterOpen((prev) => !prev)} />
          <button
            type="button"
            className="flex items-center bg-yellow-500 py-2 px-5 rounded-lg cursor-pointer"
            onClick={ () => setIsFormOpen(true) }
          >
            <FontAwesomeSvgIcon icon={ faSquarePlus } className="h-5 w-5" />
            <span className="font-light px-3">New Ticket</span>
          </button>
        </div>
      </div>
      { isFilterOpen ? (
        <div className="w-full border-y border-slate-200 bg-white p-4 mt-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex-1">
              <TicketFormFields
                fields={ filterData }
                formData={ filterState }
                onFieldChange={ handleFilterChange }
                className="grid-cols-1 gap-4 md:grid-cols-2"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibol gap-3"
            >
              <FontAwesomeSvgIcon icon={ faMagnifyingGlass } className="h-4 w-4" />
              Filter Tickets
            </button>
          </div>
        </div>
      ) : null }
      { isFormOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <div className="w-full max-w-4xl max-h-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between rounded-t-2xl bg-yellow-500 px-2 py-1">
              <h3 className="text-xl font-semibold">New Ticket</h3>
              <button
                type="button"
                className="text-slate-800"
                onClick={ () => setIsFormOpen(false) }
              >
                <FontAwesomeSvgIcon icon={ faXmark } className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[85vh] overflow-y-auto px-2 py-3">
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
                          <FontAwesomeSvgIcon icon={ faArrowUpFromBracket } className="h-4 w-4" />
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
                          <td className="border border-slate-300 px-4 py-3 text-yellow-600 items-center">
                            <FontAwesomeSvgIcon icon={ faArrowDown } className="h-4 w-4" />
                          </td>
                          <td className="border border-slate-300 px-4 py-3 text-slate-600">
                            <FontAwesomeSvgIcon icon={ faEye } className="h-4 w-4" />
                          </td>
                          <td className="border border-slate-300 px-4 py-3 text-red-600">
                            <FontAwesomeSvgIcon icon={ faTrash } className="h-4 w-4" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    className="border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
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