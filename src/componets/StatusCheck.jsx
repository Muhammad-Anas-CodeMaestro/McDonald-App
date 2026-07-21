const statusClassMap = {
  New: 'bg-purple-200 text-purple-600',
  'In Progress': 'bg-blue-200 text-blue-600',
  'On Hold': 'bg-orange-200 text-orange-600',
  Resolved: 'bg-green-200 text-green-600',
  Closed: 'bg-red-200 text-red-600',
  'Re-Open': 'bg-yellow-200 text-yellow-600',
  'Received': 'bg-blue-200 text-blue-600',
  'Active': 'text-blue-600',
  'In Active': 'text-gray-600',
};

export default function StatusCheck ({ status }) {
  const statusClass = statusClassMap[status] ?? 'bg-gray-200 text-gray-600';
  return (
    <span className={ `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${ statusClass }` }>
      { status }
    </span>
  );
}