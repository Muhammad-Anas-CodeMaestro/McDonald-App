import { useState } from 'react';
import { message, Modal } from 'antd';
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import ConfigPageHeader from './ConfigPageHeader.jsx';
import ReusableTicketModal from './ReusableTicketModal.jsx';
import TicketFormFields from '../form/TicketFormFields.jsx';
import MainTable from './MainTable.jsx';
import { useFormState } from '../hooks/useFormState.js';

export default function GenericConfigPage ({
  pageTitle,
  pageSubtitle = ' Configurations',
  tableHeaders,
  tableData,
  modalTitle,
  formFields = [],
  initialFormState = {},
  onSave,
  onAction,
  selectable,
  onSelectionChange,
  disableInactiveRows,
  toolbarActions,
  hideConfigHeader = false,
  showStatusActions = false,
})
{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const {
    formData,
    handleChange,
    resetForm,
    setFormData
  } = useFormState(initialFormState);
  function handleOpenModal ()
  {
    setModalMode('create');
    resetForm();
    setIsModalOpen(true);
  }
  function handleCloseModal ()
  {
    setIsModalOpen(false);
  }
  const handleTableAction = (actionOrRecord, recordObj) =>
  {
    if (typeof actionOrRecord !== 'string') {
      if (onAction) {
        onAction(actionOrRecord);
      }
      return;
    }
    const action = actionOrRecord;
    const record = recordObj;
    if (action === "edit") {
      setModalMode('edit');
      const newForm = { ...initialFormState };
      formFields.forEach(field =>
      {
        if (record[field.label] !== undefined) {
          newForm[field.name] = record[field.label];
        }
        else {
          const key = Object.keys(record).find(
            k =>
              k.toLowerCase().replace(/[^a-z0-9]/g, '') ===
              field.label.toLowerCase().replace(/[^a-z0-9]/g, '')
          );
          if (key) {
            newForm[field.name] = record[key];
          }
        }
      });
      setFormData(newForm);
      setIsModalOpen(true);
    }
    else if (action === "delete") {
      Modal.confirm({
        title: 'Are you sure you want to delete this record?',
        content: `Serial #: ${ record['Serial #'] }`,
        okText: 'Yes, Delete',
        okType: 'danger',
        cancelText: 'Cancel',
        onOk ()
        {
          message.success(
            'Record deleted successfully.'
          );
        }
      });
    }
    else if (action === "restore") {
      message.success(
        'Record activated successfully.'
      );
    }
  };
  async function handleSave (e)
  {
    e?.preventDefault?.();
    const missingFields = formFields.filter(
      field =>
        field.required &&
        (!formData[field.name] ||
          !String(formData[field.name]).trim())
    );
    if (missingFields.length > 0) {
      message.error(
        `Please fill in required fields: ${ missingFields.map(f => f.label).join(', ')
        }`
      );
      return;
    }
    try {
      if (onSave) {
        await onSave(formData);
      }
      if (modalTitle) {
        const actionWord =
          modalMode === 'edit'
            ? 'updated'
            : 'saved';
        message.success(
          `${ modalTitle.replace('Add ', '') } ${ actionWord } successfully.`
        );
      }
      setIsModalOpen(false);
    }
    catch {
      message.error(
        'An error occurred while saving.'
      );
    }
  }
  const dynamicModalTitle =
    modalMode === 'edit' && modalTitle
      ? modalTitle.replace('Add ', 'Edit ')
      : modalTitle;
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex flex-col w-full overflow-hidden">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6 overflow-auto">
          <h2 className="font-semibold text-2xl">
            { pageTitle } —
            <span className="font-normal">
              { pageSubtitle }
            </span>
          </h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            { !hideConfigHeader && (
              <ConfigPageHeader
                filterFields={ [] }
                filterData={ {} }
                onFilterChange={ () => () => { } }
                onFilterApply={ () => { } }
                onAddNew={ handleOpenModal }
                addNewLabel="Add New"
              />
            ) }
            <div className="mt-4">
              <MainTable
                headers={ tableHeaders }
                data={ tableData }
                onAction={ handleTableAction }
                selectable={ selectable }
                onSelectionChange={ onSelectionChange }
                disableInactiveRows={ disableInactiveRows }
                toolbarActions={ toolbarActions }
                showStatusActions={ showStatusActions }
              />
            </div>
          </div>
        </div>
      </div>
      { !hideConfigHeader && (
        <ReusableTicketModal
          open={ isModalOpen }
          onCancel={ handleCloseModal }
          title={ dynamicModalTitle }
          mode={ modalMode }
          onSubmit={ handleSave }
          submitLabel={
            modalMode === 'edit'
              ? 'Update'
              : 'Save'
          }
          cancelLabel="Cancel"
          width={ 420 }
        >
          <form
            onSubmit={ handleSave }
            className="space-y-4"
          >
            <TicketFormFields
              fields={ formFields }
              formData={ formData }
              onFieldChange={ handleChange }
              className="grid-cols-1 gap-4"
            />
          </form>
        </ReusableTicketModal>
      ) }
    </div>
  );
}