import { ConfigProvider, Input, Pagination, Select, Table, Checkbox } from 'antd';
import StatusCheck from './StatusCheck';
import { useState, useEffect } from 'react';
import { SearchOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import SCV_icon from "/SCV_icon.png"

const { Option } = Select;

export default function MainTable ({
  headers = [],
  data = [],
  onAction = null,
  selectable = false,
  onSelectionChange = null,
  disableInactiveRows = false,
  toolbarActions = null,
})
{
  const [pageSize, setPageSize] = useState(10)
  const [current, setCurrent] = useState(1)
  const [search, setSearch] = useState("")
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: header,
    key: `${ header }-${ index }`,
    ellipsis: true,
    onHeaderCell: () => ({ style: { whiteSpace: 'nowrap' } }),
    onCell: () => ({ style: { whiteSpace: 'nowrap' } }),
    render: (value, record) =>
    {
      if (header === 'Status') {
        return <StatusCheck status={ value } />;
      }

      if (header === 'Action') {
        if (value === 'forward' || value === 'view') {
          const isForwardAction = value === 'forward';
          const actionImage = isForwardAction ? '/frame_forward.png' : '/frame_view.png';
          const actionAlt = isForwardAction ? 'Forward' : 'View';

          return (
            <button
              type="button"
              onClick={ () => onAction?.(record) }
              className="flex items-center justify-center text-sm cursor-pointer"
              aria-label={ actionAlt }
            >
              <img src={ actionImage } alt={ actionAlt } className="h-5 w-5" />
            </button>
          );
        }
        
        if (value === 'delete' || value === 'restore') {
          const isDelete = value === 'delete';
          return (
            <button
              type="button"
              onClick={ () => onAction?.(record) }
              aria-label={ isDelete ? 'Delete' : 'Restore' }
              className={ `flex items-center justify-center h-6 w-6 rounded border cursor-pointer transition-colors ${ isDelete
                  ? 'border-red-400 text-red-500 hover:bg-red-50'
                  : 'border-blue-400 text-blue-500 hover:bg-blue-50'
                }` }
            >
              { isDelete ? <DeleteOutlined /> : <UndoOutlined /> }
            </button>
          );
        }
        return null;
      }
      return value;
    },
  }));

  const tableDataSource = data.map((row, rowIndex) =>
  {
    return headers.reduce((acc, header, cellIndex) =>
    {
      acc[header] = row[cellIndex];
      return acc;
    }, { key: rowIndex });
  });

  const filteredData = tableDataSource.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const paginatedData = filteredData.slice(
    (current - 1) * pageSize,
    current * pageSize
  )

  // Keep selection in sync with parent
  useEffect(() =>
  {
    onSelectionChange?.(selectedRowKeys)
  }, [selectedRowKeys])

  const rowSelection = selectable ? {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
    getCheckboxProps: (record) => ({
      disabled: disableInactiveRows && record['Status'] === 'In-Active',
    }),
  } : undefined

  const rowClassName = (record) =>
    disableInactiveRows && record['Status'] === 'In-Active' ? 'opacity-50' : ''

  return (
    <ConfigProvider
      theme={ {
        token: {
          colorPrimary: '#ffb300',
        },
        components: {
          Table: {
            headerBg: '#fef3c7',
            headerColor: '#374151',
            headerSortActiveBg: '#fde68a',
            borderColor: '#e5e7eb',
            rowHoverBg: '#fffbeb',
          },
          Pagination: {
            itemActiveBg: '#ffb300',
            itemActiveColor: '#000000',
            itemSize: 32,
            itemBorderRadius: 4,
          },
          Checkbox: {
            colorPrimary: '#ffb300',
          },
        },
      } }
    >
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <Select
              value={ pageSize }
              style={ { width: 80 } }
              onChange={ (value) =>
              {
                setPageSize(value);
                setCurrent(1);
              } }
            >
              <Option value={ 10 }>10</Option>
              <Option value={ 20 }>20</Option>
              <Option value={ 50 }>50</Option>
            </Select>
            <span className="text-sm">
              entries per page
            </span>
          </div>
          <div className='flex items-center gap-3'>
            { toolbarActions }
            <img src={ SCV_icon } alt="scv_icon" className="h-7" />
            <Input
              id='1'
              placeholder="Search..."
              prefix={ <SearchOutlined /> }
              value={ search }
              onChange={ (e) =>
              {
                setSearch(e.target.value);
                setCurrent(1);
              } }
              style={ { width: 250 } }
            />
          </div>
        </div>
        <Table
          columns={ columns }
          dataSource={ paginatedData }
          pagination={ false }
          rowKey="key"
          rowSelection={ rowSelection }
          rowClassName={ rowClassName }
          size='small'
          scroll={ { x: 'max-content' } }
          style={ { border: '1px solid #e5e7eb', borderRadius: 8, padding: 0 } }
        />
        <div className='flex justify-end mt-3'>
          <Pagination
            current={ current }
            pageSize={ pageSize }
            total={ filteredData.length }
            onChange={ (page) => setCurrent(page) }
            showSizeChanger={ false }
          />
        </div>
      </div>
    </ConfigProvider>
  );
}