import GenericConfigPage from "../componets/GenericConfigPage";

const INITIAL_FORM = {
  ticketType: '',
};

const FORM_FIELDS = [
  {
    name: 'tickettype',
    label: 'Ticket Type',
    type: 'text',
    placeholder: 'Service Request',
    required: true,
    gridClassName: 'col-span-1',
  }
];

const TABLE_HEADERS = ['Serial #', 'Description', 'Status', 'Action'];
const TABLE_DATA = [
  ['01', 'Service Request', 'Active'],
  ['02', 'Incident', 'Active'],
];

export default function TicketType ()
{
  function handleSave (data)
  {
    console.log('Saving 3rd Category:', data);
  }
  return (
    <GenericConfigPage
      pageTitle={"Ticket Type"}
      tableHeaders={TABLE_HEADERS}
      tableData={TABLE_DATA}
      modalTitle={"Add Ticket Type"}
      formFields={FORM_FIELDS}
      initialFormState={ INITIAL_FORM }
      onSave={ handleSave }
      config
    />
  );
}
