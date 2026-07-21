import { useState } from 'react';
import Header from '../componets/Header.jsx';
import SideBar from '../componets/SideBar.jsx';
import ConfigPageHeader from '../componets/ConfigPageHeader.jsx';
import ReusableTicketModal from '../componets/ReusableTicketModal.jsx';
import TicketFormFields from '../form/TicketFormFields.jsx';
import MainTable from '../componets/MainTable.jsx';
import { useFormState } from '../hooks/useFormState.js';

const INITIAL_FORM = {
  mainCategory: '',
};

const FORM_FIELDS = [
  {
    name: 'mainCategory',
    label: 'Main Category',
    type: 'text',
    placeholder: 'IT',
    required: true,
    gridClassName: 'col-span-1',
  },
  {
    name: 'secondCategory',
    label: 'Second Category',
    type: 'text',
    placeholder: 'Hardware',
    required: true,
    gridClassName: 'col-span-1',
  },
  {
    name: 'thirdCategory',
    label: 'Third Category',
    type: 'text',
    placeholder: 'Mouse',
    required: true,
    gridClassName: 'col-span-1',
  },
];

const TABLE_HEADERS = ['Serial #', 'Main Category', '2nd Category', '3rd Category', 'Status', 'Action'];
const TABLE_DATA = [
  ['01', 'IT', 'Software', 'ERP', 'Active'],
  ['02', 'IT', 'Hardware', 'Mouse', 'Active'],
  ['03', 'IT', 'Network & Email', 'Internet', 'In Active'],
  ['04', 'Admin', 'General Services', 'Cleaning', 'Active'],
  ['05', 'Admin', 'Transport', 'Vehicle', 'In Active'],
];

export default function ThirdCategory ()
{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formData, handleChange, resetForm } = useFormState(INITIAL_FORM);
  function handleOpenModal ()
  {
    resetForm();
    setIsModalOpen(true);
  }
  function handleCloseModal ()
  {
    setIsModalOpen(false);
  }
  function handleSave (e)
  {
    e?.preventDefault?.();
    if (!formData.mainCategory.trim()) return;
    alert(`Category "${ formData.mainCategory }" saved successfully.`);
    setIsModalOpen(false);
  }
  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6 overflow-auto">
          <h2 className="font-semibold text-2xl">
            Ticket 3rd Category —{ ' ' }
            <span className="font-normal">Configurations</span>
          </h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <ConfigPageHeader
              filterFields={ [] }
              filterData={ {} }
              onFilterChange={ () => () => { } }
              onFilterApply={ () => { } }
              onAddNew={ handleOpenModal }
              addNewLabel="Add New"
            />
            <div className="mt-4">
              <MainTable
                headers={ TABLE_HEADERS }
                data={ TABLE_DATA }
              />
            </div>
          </div>
        </div>
      </div>
      <ReusableTicketModal
        open={ isModalOpen }
        onCancel={ handleCloseModal }
        title="Add Ticket 3rd Category"
        mode="create"
        onSubmit={ handleSave }
        submitLabel="Save"
        cancelLabel="Cancel"
        width={ 420 }
      >
        <form onSubmit={ handleSave } className="space-y-4">
          <TicketFormFields
            fields={ FORM_FIELDS }
            formData={ formData }
            onFieldChange={ handleChange }
            className="grid-cols-1 gap-4"
          />
        </form>
      </ReusableTicketModal>
    </div>
  );
}
