import { Table as AntTable } from 'antd';
import StatusCheck from './StatusCheck';

export default function Table({ headers = [], data = [], onAction = null }) {
  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: header,
    key: `${header}-${index}`,
    render: (value) => {
      if (header === 'Status') {
        return <StatusCheck status={value} />;
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