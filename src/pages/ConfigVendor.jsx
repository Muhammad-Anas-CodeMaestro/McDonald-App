import GenericConfigPage from '../componets/GenericConfigPage.jsx';

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

const TABLE_HEADERS = ['Serial #', 'Name', 'Email', 'Contact No', 'Store Location(s)', 'Ticket Categorie(s)', 'Status', 'Action'];
const TABLE_DATA = [
  ['01', 'ABC and Sons', 'abcsons@domain.com', '021-12345678', 'Barkat Market', 'IT -> Software -> ERP','Active'],
  ['02', 'XYZ & C0.', 'xyzco@domain.com', '021-87654321', 'Atrium Mall', 'Admin -> Transport -> Vehicle','Active'],
  ['03', 'Ali Enterprises', 'alient@domain.com', '021-12345678', 'Lake City', 'Admin -> General Services -> Cleaning', 'Active'],
];

export default function ConfigVendor ()
{
  function handleSave (data)
  {
    console.log('Saving Vendor Config:', data);
  }

  return (
    <GenericConfigPage
      pageTitle="Vendor"
      pageSubtitle="Configurations"
      tableHeaders={ TABLE_HEADERS }
      tableData={ TABLE_DATA }
      modalTitle="Add Vendor"
      formFields={ FORM_FIELDS }
      initialFormState={ INITIAL_FORM }
      onSave={ handleSave }
    />
  );
}
