import GenericConfigPage from '../componets/GenericConfigPage.jsx';

const TABLE_HEADERS = ['Serial #', 'Ticket Priority', 'Turnaround Time (TAT)', 'Status', 'Action'];
const TABLE_DATA = [
  ['01', 'High', '1 hr','Active'],
  ['02', 'Medium', '3 hrs','Active'],
  ['03', 'Low', '5 hrs','Active'],
];

export default function TicketPriority ()
{
  return (
    <GenericConfigPage
      pageTitle="Ticket Priority"
      pageSubtitle="Configurations"
      tableHeaders={ TABLE_HEADERS }
      tableData={ TABLE_DATA }
      hideConfigHeader={ true }
      config="configuration"
    />
  );
}
