import { Table as AntTable } from 'antd';
import StatusCheck from './StatusCheck';

export default function Table({ headers = [], data = [], onAction = null }) {
  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: header,
    key: `${header}-${index}`,
    render: (value, record) => {
      if (header === 'Status') {
        return <StatusCheck status={value} />;
      }

      if (header === 'Action') {
        const isForwardAction = value === 'forward';
        const actionImage = isForwardAction ? '/frame_forward.png' : '/frame_view.png';
        const actionAlt = isForwardAction ? 'Forward' : 'View';

        return (
          <button
            type="button"
            onClick={() => onAction?.(record)}
            className="flex items-center justify-center text-sm cursor-pointer"
            aria-label={actionAlt}
          >
            <img src={actionImage} alt={actionAlt} className="h-5 w-5" />
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
