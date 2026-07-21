import GenericConfigPage from '../componets/GenericConfigPage.jsx';

const INITIAL_FORM = {
  mainCategory: '',
  secondCategory: '',
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
  }
];

const TABLE_HEADERS = [
  'Serial #',
  'Main Category',
  '2nd Category',
  'Status',
  'Action'
];

const TABLE_DATA = [
  {
    Serial: '01',
    MainCategory: 'IT',
    secondCategory: 'Software',
    Status: 'Active',
  },
  {
    Serial: '02',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    Status: 'Active',
  },
  {
    Serial: '03',
    mainCategory: 'IT',
    secondCategory: 'Network & Email',
    Status: 'In Active',
  },
  {
    Serial: '04',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    Status: 'Active',
  },
  {
    Serial: '05',
    mainCategory: 'Admin',
    secondCategory: 'Transport',
    Status: 'In Active',
  },
];

function toSecondArrayRows(rows) {
  return rows.map((r)=> [
    r.Serial,
    r.mainCategory,
    r.secondCategory,
    r.Status,
  ])
}

function getAllSecondCategoryData(){
  return toSecondArrayRows(TABLE_DATA)
}

export default function SecondCategory() {

  function handleSave(data) {
    console.log('Saving 2nd Category:', data);
  }

  return (
    <GenericConfigPage
      pageTitle="Ticket 2nd Category"
      tableHeaders={TABLE_HEADERS}
      tableData={getAllSecondCategoryData()}
      modalTitle="Add Ticket 2nd Category"
      formFields={FORM_FIELDS}
      initialFormState={INITIAL_FORM}
      onSave={handleSave}
      config="configuration"
      showStatusActions={true}
    />
  );
}