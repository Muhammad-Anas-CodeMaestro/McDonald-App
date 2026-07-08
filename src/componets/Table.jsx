import { Table as AntTable } from 'antd';

export default function Table({ headers = [], data = [], onAction = null }) {
  const statusClassMap = {
    New: 'bg-purple-200 text-purple-600',
    'In Progress': 'bg-blue-200 text-blue-600',
    'On Hold': 'bg-yellow-200 text-yellow-600',
    Resolved: 'bg-green-200 text-green-600',
    Closed: 'bg-gray-200 text-gray-600',
  };

  const getStatusClass = (status) => {
    return statusClassMap[status] ?? 'bg-gray-200 text-gray-600';
  };

  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: header,
    key: `${header}-${index}`,
    render: (value) => {
      if (header === 'Status') {
        return (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(value)}`}
          >
            {value}
          </span>
        );
      }

      if (header === 'Action') {
        return (
          <button
            type="button"
            onClick={() => onAction?.(value)}
            className="text-sm hover:text-blue-600"
          >
            {value}
          </button>
        );
      }

      return value;
    },
  }));

  const tableDataSource = data.map((row, rowIndex) => {
    return headers.reduce((acc, header, cellIndex) => {
      acc[header] = row[cellIndex];
      return acc;
    }, { key: rowIndex });
  });

  return (
    <div className="w-full border border-gray-200 mt-4">
      <AntTable
        className="w-full min-w-full table-auto border-collapse"
        columns={columns}
        dataSource={tableDataSource}
        pagination={false}
        rowKey="key"
        size="small"
        locale={{ emptyText: 'No data available' }}
      />
    </div>
  );
}