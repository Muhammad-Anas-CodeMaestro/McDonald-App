import { useMemo, useState } from "react";
import {
  Table,
  Pagination,
  Select,
  Input,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function TicketTable() {
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  const [search, setSearch] = useState("");

  const columns = [
    {
      title: "Ticket Number",
      dataIndex: "ticketNumber",
    },
    {
      title: "Ticket Title",
      dataIndex: "title",
    },
    {
      title: "Main Category",
      dataIndex: "mainCategory",
    },
    {
      title: "2nd Category",
      dataIndex: "secondCategory",
    },
    {
      title: "3rd Category",
      dataIndex: "thirdCategory",
    },
    {
      title: "Description",
      dataIndex: "description",
      ellipsis: true,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <span
          className={`px-2 py-1 rounded-full text-xs
            ${
              status === "New"
                ? "bg-purple-100 text-purple-700"
                : status === "In Progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      render: () => (
        <button className="border rounded p-1 hover:bg-gray-100">
          👁
        </button>
      ),
    },
  ];

  const data = Array.from({ length: 30 }, (_, i) => ({
    key: i + 1,
    ticketNumber: `2025/MC/${65450 + i}`,
    title: "ERP Issue",
    mainCategory: "IT",
    secondCategory: "Software",
    thirdCategory: "ERP",
    description: "The customer is having issue with...",
    createdAt: "26/02/2025 12:00pm",
    status:
      i % 3 === 0
        ? "New"
        : i % 3 === 1
        ? "In Progress"
        : "On Hold",
  }));

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const paginatedData = filteredData.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  return (
    <div className="bg-white rounded-lg shadow p-5">

      {/* Header */}

      <div className="flex justify-between items-center mb-4">

        {/* Entries */}

        <div className="flex items-center gap-2">

          <Select
            value={pageSize}
            style={{ width: 80 }}
            onChange={(value) => {
              setPageSize(value);
              setCurrent(1);
            }}
          >
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
            <Option value={50}>50</Option>
          </Select>

          <span className="text-sm">
            entries per page
          </span>

        </div>

        {/* Search */}

        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrent(1);
          }}
          style={{ width: 250 }}
        />

      </div>

      {/* Table */}

      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        rowKey="key"
        size="small"
      />

      {/* Footer */}

      <div className="flex justify-end mt-5">

        <Pagination
          current={current}
           pageSize={pageSize}
          total={filteredData.length}
          onChange={(page) => setCurrent(page)}
          showSizeChanger={false}
        />

      </div>

    </div>
  );
}

// .ant-pagination-item {
//   border-radius: 4px;
//   min-width: 32px;
//   height: 32px;
//   line-height: 30px;
// }

// .ant-pagination-item-active {
//   background: #ffb300;
//   border-color: #ffb300;
// }

// .ant-pagination-item-active a {
//   color: white;
// }

// .ant-pagination-prev,
// .ant-pagination-next {
//   border: 1px solid #d9d9d9;
//   border-radius: 4px;
//   height: 32px;
//   line-height: 30px;
//   padding: 0 10px;
// }

// .ant-table-thead > tr > th {
//   background: #fef3c7;
//   font-weight: 600;
// }

// .ant-table {
//   border: 1px solid #e5e7eb;
// }