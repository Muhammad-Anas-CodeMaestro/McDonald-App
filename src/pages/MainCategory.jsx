import GenericConfigPage from '../componets/GenericConfigPage.jsx';

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
];

const TABLE_HEADERS = ['Serial #', 'Main Category', 'Status', 'Action'];
const TABLE_DATA = [
  ['01', 'IT', 'Active'],
  ['02', 'Operations', 'Active'],
  ['03', 'Administration', 'Active'],
];

export default function MainCategory ()
{
  function handleSave (data)
  {
    console.log('Saving Main Category:', data);
  }

  return (
    <GenericConfigPage
      pageTitle="Ticket Main Category"
      tableHeaders={ TABLE_HEADERS }
      tableData={ TABLE_DATA }
      modalTitle="Add Ticket Main Category"
      formFields={ FORM_FIELDS }
      initialFormState={ INITIAL_FORM }
      onSave={ handleSave }
      config="configuration"
    />
  );
}
