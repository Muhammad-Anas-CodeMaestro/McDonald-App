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


function toArrayRows (rows)
{
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

export function getAllTableData ()
{
  return toArrayRows(baseTickets);
}

export function getTableDataFilteredByStatus (statuses)
{
  if (!statuses) return getAllTableData();
  const set = new Set(Array.isArray(statuses) ? statuses : [statuses]);
  return toArrayRows(baseTickets.filter((t) => set.has(t.status)));
}

export function getTableDataTransformed (status, action)
{
  return toArrayRows(
    baseTickets.map((t) => ({ ...t, status: status ?? t.status, action: action ?? t.action }))
  );
}

export const notificationtTableHeaders = [
  'Ticket Number',
  'Notification Date & Time',
  'Description'
];

const baseNotifications = [
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'New support ticket submitted by John Doe'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'Ticket #2025/CS135 assigned to you by Supervisor'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'Ticket #2025/MC/65448 escalated at 26/02/2025 02:01pm'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'User submitted re-open request for ticket #2025/MC/65494'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'Vendor replied on ticket #2025/CS123'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'New support ticket submitted by John Doe'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'Ticket #2025/MC/65448 escalated at 26/02/2025 02:01pm'
  },
  {
    ticketNumber: '2025/MC/65457',
    createdAt: '26/02/2025 12:00pm',
    description: 'Vendor replied on ticket #2025/MC/65448'
  }
];

function toNotificationArrayRows (rows)
{
  return rows.map((r) => [
    r.ticketNumber,
    r.createdAt,
    r.description,
  ]);
}

export function getAllnotificationValue ()
{
  return toNotificationArrayRows(baseNotifications);
}

export const ticketVendorTableHeaders = [
  'Ticket Number',
  'Ticket Title',
  'Main Category',
  '2nd Category',
  '3rd Category',
  'Store Location',
  'Department',
  'Ticket Create At',
  'TAT hr(s)',
  'Escalated At',
  'Status',
  'Action'
];

const baseTicketsVendor = [
  {
    ticketNumber: '2025/MC/65457',
    title: 'ERP Issue',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'ERP',
    storeLocation: 'Nipa Branch',
    department: 'Finance',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 1,
    escalatedAt: '26/02/2025 02:01pm',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Mouse Issue',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    thirdCategory: 'Mouse',
    storeLocation: 'PIDC Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 1,
    escalatedAt: '26/02/2025 02:01pm',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Office Supplies',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    thirdCategory: 'Cleaning',
    storeLocation: 'Main Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 3,
    escalatedAt: '',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Running Slowly',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'OS',
    storeLocation: 'PECHS Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 3,
    escalatedAt: '',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Need Transport',
    mainCategory: 'Admin',
    secondCategory: 'Transport',
    thirdCategory: 'Vehicle',
    storeLocation: 'Main Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 3,
    escalatedAt: '',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Mouse Problem',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    thirdCategory: 'Printer',
    storeLocation: 'PIDC Branch',
    department: 'Finance',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 5,
    escalatedAt: '',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Network Issue',
    mainCategory: 'IT',
    secondCategory: 'Network & Email',
    thirdCategory: 'Internet',
    storeLocation: 'Main Branch',
    department: 'HR',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 5,
    escalatedAt: '',
    status: 'In Progress',
    action: 'view'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Floor Cleaning',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    thirdCategory: 'Cleaning',
    storeLocation: 'Main Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 5,
    escalatedAt: '',
    status: 'In Progress',
    action: 'view'
  }
];

function toVendorArayRows (rows) {
  return rows.map((r) => [
    r.ticketNumber,
    r.title,
    r.mainCategory,
    r.secondCategory,
    r.thirdCategory,
    r.storeLocation,
    r.department,
    r.createdAt,
    r.tatHours,
    r.escalatedAt,
    r.status,
    r.action,
  ])
}

export function getAllTicketsVendor () {
  return toVendorArayRows(baseTicketsVendor)
}

export const mainTicketTableHeader = [
  'Ticket Number',
  'Ticket Title',
  'Main Category',
  '2nd Category',
  '3rd Category',
  'Store Location',
  'Department',
  'Ticket Create At',
  'TAT hr(s)',
  'Escalated At',
  'Status',
  'Action'
];

const baseTicketAssigned = [
  {
    ticketNumber: '2025/MC/65457',
    title: 'ERP Issue',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'ERP',
    storeLocation: 'Nipa Branch',
    department: 'Finance',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 1,
    escalatedAt: '26/02/2025 02:01pm',
    status: 'In Progress',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Mouse Issue',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    thirdCategory: 'Mouse',
    storeLocation: 'PIDC Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 1,
    escalatedAt: '26/02/2025 02:01pm',
    status: 'Re-Open',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Office Supplies',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    thirdCategory: 'Cleaning',
    storeLocation: 'Main Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 3,
    escalatedAt: '',
    status: 'In Progress',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Running Slowly',
    mainCategory: 'IT',
    secondCategory: 'Software',
    thirdCategory: 'OS',
    storeLocation: 'PECHS Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 3,
    escalatedAt: '',
    status: 'In Progress',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Need Transport',
    mainCategory: 'Admin',
    secondCategory: 'Transport',
    thirdCategory: 'Vehicle',
    storeLocation: 'Main Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 3,
    escalatedAt: '',
    status: 'On Hold',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Mouse Problem',
    mainCategory: 'IT',
    secondCategory: 'Hardware',
    thirdCategory: 'Printer',
    storeLocation: 'PIDC Branch',
    department: 'Finance',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 5,
    escalatedAt: '',
    status: 'In Progress',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Network Issue',
    mainCategory: 'IT',
    secondCategory: 'Network & Email',
    thirdCategory: 'Internet',
    storeLocation: 'Main Branch',
    department: 'HR',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 5,
    escalatedAt: '',
    status: 'In Progress',
    action: 'forward'
  },
  {
    ticketNumber: '2025/MC/65457',
    title: 'Floor Cleaning',
    mainCategory: 'Admin',
    secondCategory: 'General Services',
    thirdCategory: 'Cleaning',
    storeLocation: 'Main Branch',
    department: 'Admin',
    createdAt: '26/02/2025 12:00pm',
    tatHours: 5,
    escalatedAt: '',
    status: 'In Progress',
    action: 'forward'
  }
];

function tonewTicketTableRows (rows) {
  return rows.map((r) => [
    r.ticketNumber,
    r.title,
    r.mainCategory,
    r.secondCategory,
    r.thirdCategory,
    r.storeLocation,
    r.department,
    r.createdAt,
    r.tatHours,
    r.escalatedAt,
    r.status,
    r.action
  ])
}

export function getAllNewTicketDataAssigned (status, action) {
  return tonewTicketTableRows(
    baseTicketAssigned.map((t) => ({ ...t, status: status ?? t.status, action: action ?? t.action }))
  );
}

export default {
  tableHeaders,
  getAllTableData,
  getTableDataFilteredByStatus,
  getTableDataTransformed,
  notificationtTableHeaders,
  getAllnotificationValue,
  getAllTicketsVendor,
  getAllNewTicketDataAssigned
};