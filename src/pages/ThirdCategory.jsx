import GenericConfigPage from '../componets/GenericConfigPage.jsx';

const INITIAL_FORM = {
  mainCategory: '',
  secondCategory: '',
  thirdCategory: '',
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
  {
    serial: '01',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'ERP',
    status: 'Active'
  },
  {
    serial: '02',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    thirdCategory: 'Mouse',
    status: 'Active',
  },
  {
    serial: '03',
    mainCategory: 'IT',
    secondCategory: 'Network & Email',
    thirdCategory: 'Internet',
    status: 'In Active',
  },
  {
    serial: '04',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    thirdCategory: 'Cleaning',
    status: 'Active',
  },
  {
    serial: '05',
    mainCategory: 'Admin',
    secondCategory: 'Transport',
    thirdCategory: 'Vehicle',
    status: 'In Active',
  }
];

function tothirdArrayRow(rows){
  return rows.map((r) => [
    r.serial,
    r.mainCategory,
    r.secondCategory,
    r.thirdCategory,
    r.status
  ])
}

function getAllThirdCateoryData(){
  return tothirdArrayRow(TABLE_DATA)
}

export default function ThirdCategory ()
{
  function handleSave (data)
  {
    console.log('Saving 3rd Category:', data);
  }

  return (
    <GenericConfigPage
      pageTitle="Ticket 3rd Category"
      tableHeaders={ TABLE_HEADERS }
      tableData={ getAllThirdCateoryData() }
      modalTitle="Add Ticket 3rd Category"
      formFields={ FORM_FIELDS }
      initialFormState={ INITIAL_FORM }
      onSave={ handleSave }
      showStatusActions={true}
    />
  );
}
