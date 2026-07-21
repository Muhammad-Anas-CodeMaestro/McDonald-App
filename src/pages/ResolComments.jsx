import GenericConfigPage from '../componets/GenericConfigPage.jsx';

const INITIAL_FORM = {
  mainCategory: '',
  secondCategory: '',
  thirdCategory: '',
  Comments: '',
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
  {
    name: 'Comments',
    label: 'Resolution Comments',
    type: 'text',
    placeholder: 'Issue has been resolved',
    required: true,
    gridClassName: 'col-span-1',
  },
];

const TABLE_HEADERS = ['Serial #', 'Resolution Comments', 'Main Category', '2nd Category', '3rd Category', 'Status', 'Action'];
const TABLE_DATA = [
  ['01', 'Issue has been resolved.', 'IT', 'Software', 'ERP', 'Active'],
  ['02', 'No issue found upon investigation.', 'IT', 'Hardware', 'Mouse', 'Active'],
  ['03', 'Issue has been resolved.', 'IT', 'Network & Email', 'Internet', 'In Active'],
  ['04', 'No issue found upon investigation.', 'Admin', 'General Services', 'Cleaning', 'Active'],
  ['05', 'Issue has been resolved.', 'Admin', 'Transport', 'Vehicle', 'In Active'],
];

export default function ResolComments ()
{
  function handleSave (data)
  {
    console.log('Saving Resolution Comments:', data);
  }

  return (
    <GenericConfigPage
      pageTitle="Resolution Comments"
      pageSubtitle="Configurations"
      tableHeaders={ TABLE_HEADERS }
      tableData={ TABLE_DATA }
      modalTitle="Add Ticket Resolution Comments"
      formFields={ FORM_FIELDS }
      initialFormState={ INITIAL_FORM }
      onSave={ handleSave }
    />
  );
}
