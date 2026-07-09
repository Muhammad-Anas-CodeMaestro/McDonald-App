export const tableHeaders = [
  'Ticket Number',
  'Ticket Title',
  'Main Category',
  '2nd Category',
  '3rd Category',
  'Description',
  'Ticket Create At',
  'Status',
  'Action'
];

const baseTickets = [
  {
    ticketNumber: '2025MCK6497',
    title: 'ERP Issue',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'ERP',
    description: 'The customer is having issue with...',
    createdAt: '26/02/2025 12:00pm',
    status: 'New',
    action: 'view'
  },
  {
    ticketNumber: '2025MCK6497',
    title: 'Cleaning Required',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    thirdCategory: 'Cleaning',
    description: 'The customer is having issue with...',
    createdAt: '26/02/2025 12:00pm',
    status: 'New',
    action: 'view'
  },
  {
    ticketNumber: '2025MCK6497',
    title: 'OS Hang Issue',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'OS',
    description: 'The customer is having issue with...',
    createdAt: '26/02/2025 12:00pm',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025MCK6497',
    title: 'Vehicle Required',
    mainCategory: 'Admin',
    secondCategory: 'Transport',
    thirdCategory: 'Vehicle',
    description: 'The customer is having issue with...',
    createdAt: '26/02/2025 12:00pm',
    status: 'On Hold',
    action: 'view'
  },
  {
    ticketNumber: '2025MCK6497',
    title: 'Mouse Problem',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    thirdCategory: 'Mouse',
    description: 'The customer is having issue with...',
    createdAt: '26/02/2025 12:00pm',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025MCK6497',
    title: 'Internet Issue',
    mainCategory: 'IT',
    secondCategory: 'Network & Email',
    thirdCategory: 'Internet',
    description: 'The customer is having issue with...',
    createdAt: '26/02/2025 12:00pm',
    status: 'In Progress',
    action: 'view'
  }
];

function toArrayRows(rows) {
  return rows.map((r) => [
    r.ticketNumber,
    r.title,
    r.mainCategory,
    r.secondCategory,
    r.thirdCategory,
    r.description,
    r.createdAt,
    r.status,
    r.action
  ]);
}

export function getAllTableData() {
  return toArrayRows(baseTickets);
}

export function getTableDataFilteredByStatus(statuses) {
  if (!statuses) return getAllTableData();
  const set = new Set(Array.isArray(statuses) ? statuses : [statuses]);
  return toArrayRows(baseTickets.filter((t) => set.has(t.status)));
}

export function getTableDataTransformed(status, action) {
  return toArrayRows(
    baseTickets.map((t) => ({ ...t, status: status ?? t.status, action: action ?? t.action }))
  );
}

export default {
  tableHeaders,
  getAllTableData,
  getTableDataFilteredByStatus,
  getTableDataTransformed
};
