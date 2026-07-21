import { ConfigProvider, Input, Pagination, Select, Table } from 'antd';
import StatusCheck from './StatusCheck';
import { useState, useEffect } from 'react';
import { SearchOutlined, DeleteOutlined, UndoOutlined } from '@ant-design/icons';
import SCV_icon from "/SCV_icon.png";
import { useAuth } from '../context/AuthContext';

const { Option } = Select;

export default function MainTable ({
  headers = [],
  data = [],
  onAction = null,
  selectable = false,
  onSelectionChange = null,
  disableInactiveRows = false,
  toolbarActions = null,
  actionType = "configuration",
  showStatusActions = false
})
{
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { user } = useAuth();
  const userRole = user?.roleId === 1;

  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: header,
    key: `${ header }-${ index }`,
    ellipsis: true,
    onHeaderCell: () => ({
      style: {
        whiteSpace: 'nowrap'
      }
    }),
    onCell: () => ({
      style: {
        whiteSpace: 'nowrap'
      }
    }),
    render: (value, record) =>
    {
      if (header === "Status") {
        return (
          <StatusCheck status={ value } />
        );
      }
      if (header === "Action") {
        if (showStatusActions) {
          if (record["Status"] === "Active") {
            return (
              <div className="flex gap-2">
                <button
                  onClick={ () =>
                    onAction?.("edit", record)
                  }
                  className="
                  flex items-center justify-center
                  h-6 w-6 rounded
                  border border-blue-500
                  text-blue-500
                  hover:bg-blue-50
                  "
                >
                  ✏️
                </button>
                <button
                  onClick={ () =>
                    onAction?.("delete", record)
                  }
                  className="
                  flex items-center justify-center
                  h-6 w-6 rounded
                  border border-red-500
                  text-red-500
                  hover:bg-red-50
                  "
                >
                  <DeleteOutlined />
                </button>
              </div>
            );
          }
          if (record["Status"] === "In Active") {
            return (
              <button
                onClick={ () =>
                  onAction?.("restore", record)
                }
                className="
                flex items-center justify-center
                h-6 w-6 rounded
                border border-blue-400
                text-blue-500
                hover:bg-blue-50
                "
              >
                <UndoOutlined />
              </button>
            );
          }
        }
        if (actionType === "configuration") {
          return (
            <div className="flex gap-2">
              <button
                onClick={ () =>
                  onAction?.("edit", record)
                }
                className="
                flex items-center justify-center
                h-6 w-6 rounded
                border border-blue-500
                text-blue-500
                hover:bg-blue-50
                "
              >
                ✏️
              </button>
              <button
                onClick={ () =>
                  onAction?.("delete", record)
                }
                className="
                flex items-center justify-center
                h-6 w-6 rounded
                border border-red-500
                text-red-500
                hover:bg-red-50
                "
              >
                <DeleteOutlined />
              </button>
            </div>
          );
        }
        if (value === "forward" || value === "view") {
          const isForward = value === "forward";
          return (
            <button
              onClick={ () =>
                onAction?.(record)
              }
              className="
              flex items-center justify-center
              cursor-pointer
              "
            >
              <img
                src={
                  isForward
                    ? "/frame_forward.png"
                    : "/frame_view.png"
                }
                className="h-5 w-5"
              />
            </button>
          );
        }
        if (value === "delete" || value === "restore") {
          return (
            <button
              onClick={ () =>
                onAction?.(record)
              }
              className="
              flex items-center justify-center
              h-6 w-6 rounded
              border cursor-pointer
              "
            >
              {
                value === "delete"
                  ?
                  <DeleteOutlined />
                  :
                  <UndoOutlined />
              }
            </button>
          );
        }
        return null;
      }
      return value;
    }
  }));
  const tableDataSource = data.map((row, rowIndex) =>
  {
    if (!Array.isArray(row)) {
      return {
        ...row,
        key: rowIndex
      };
    }
    return headers.reduce((acc, header, index) =>
    {
      acc[header] = row[index];
      return acc;
    }, {
      key: rowIndex
    });
  });
  const filteredData = tableDataSource.filter(row =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const paginatedData = filteredData.slice(
    (current - 1) * pageSize,
    current * pageSize
  );
  useEffect(() =>
  {
    onSelectionChange?.(selectedRowKeys);
  }, [selectedRowKeys]);
  const rowSelection = selectable
    ? {
      selectedRowKeys,
      onChange: (keys) =>
        setSelectedRowKeys(keys),
      getCheckboxProps: (record) => ({
        disabled:
          disableInactiveRows &&
          record["Status"] === "In Active"
      })
    }
    : undefined;
  const rowClassName = (record) =>
    disableInactiveRows &&
      record["Status"] === "In Active"
      ?
      "opacity-50"
      :
      "";
  return (
    <ConfigProvider
      theme={ {
        token: {
          colorPrimary: '#ffb300'
        }
      } }
    >
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <Select
              value={ pageSize }
              style={ {
                width: 80
              } }
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
            <span>
              entries per page
            </span>
          </div>
          <div className="flex items-center gap-3">
            { toolbarActions }
            {
              !userRole &&
              <img
                src={ SCV_icon }
                className="h-7"
              />
            }
            <Input
              placeholder="Search..."
              prefix={ <SearchOutlined /> }
              value={ search }
              onChange={ (e) =>
              {
                setSearch(e.target.value);
                setCurrent(1);
              } }
              style={ {
                width: 250
              } }
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
          size="small"
          scroll={ {
            x: 'max-content'
          } }
        />
        <div className="flex justify-end mt-3">
          <Pagination
            current={ current }
            pageSize={ pageSize }
            total={ filteredData.length }
            onChange={ (page) =>
              setCurrent(page)
            }
            showSizeChanger={ false }
          />
        </div>
      </div>
    </ConfigProvider>
  );
}