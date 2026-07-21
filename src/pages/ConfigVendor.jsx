import { useState } from 'react';
import Header from '../componets/Header.jsx';
import SideBar from '../componets/SideBar.jsx';
import ConfigPageHeader from '../componets/ConfigPageHeader.jsx';
import ReusableTicketModal from '../componets/ReusableTicketModal.jsx';
import TicketFormFields from '../form/TicketFormFields.jsx';
import MainTable from '../componets/MainTable.jsx';
import { useFormState } from '../hooks/useFormState.js';

const INITIAL_FORM = {
  ticketType: '',
};

const FORM_FIELDS = [
  {
    name: 'confiqvendor',
    label: 'Ticket Type',
    type: 'text',
    placeholder: 'Service Request',
    required: true,
    gridClassName: 'col-span-1',
  }
];

const TABLE_HEADERS = ['Serial #', 'Name', 'Email', 'Contact No', 'Store Location(s)', 'Ticket Categorie(s)', 'Status'];
const TABLE_DATA = [
  ['01', 'ABC and Sons', 'abcsons@domain.com', '021-12345678', 'Barkat Market', 'IT -> Software -> ERP','Active'],
  ['02', 'XYZ & C0.', 'xyzco@domain.com', '021-87654321', 'Atrium Mall', 'Admin -> Transport -> Vehicle','Active'],
  ['03', 'Ali Enterprises', 'alient@domain.com', '021-12345678', 'Lake City', 'Admin -> General Services -> Cleaning', 'Active'],
];

export default function ConfigVendor ()
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
    if (!formData.ticketType.trim()) return;
    alert(`Category "${ formData.ticketType }" saved successfully.`);
    setIsModalOpen(false);
  }

  return (
    <div className="flex min-h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6 overflow-auto">
          <h2 className="font-semibold text-2xl">
            Vendor —{ ' ' }
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
        title="Add Vendor"
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
