import { useState, useMemo } from 'react';
import { Select, Button, message } from 'antd';
import MainTable from '../componets/MainTable';
import SideBar from '../componets/SideBar';
import Header from '../componets/Header';


const { Option } = Select;

const HEADERS = ['Serial #', 'User Name', 'Login ID', 'Department', 'Current Role', 'Status'];

const SEED_USERS = [
  ['01', 'Arbaz Ahmed', 'MCD0001234', 'IT', 'User', 'Active'],
  ['02', 'Asad Ali', 'MCD0001256', 'Finance', 'User', 'Active'],
  ['02', 'Ather Mehmood', 'MCD0001287', 'Admin', 'User', 'In Active'],
];

export default function UserRole ()
{
  const [roleFilter, setRoleFilter] = useState('Admin');
  const [selectedKeys, setSelectedKeys] = useState([]);

  const tableData = SEED_USERS.map((u) => [
    u.userName,
    u.loginId,
    u.department,
    u.role,
    u.status,
    // u.status === 'Active' ? 'delete' : 'restore',
  ]);

  const handleAction = (record) =>
  {
    const target = users.find((u) => u.loginId === record['Login ID']);
    if (!target) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.loginId === target.loginId
          ? { ...u, status: u.status === 'Active' ? 'In-Active' : 'Active' }
          : u
      )
    );
  };

  const handleChangeRole = () =>
  {
    // if (selectedKeys.length === 0) {
    //   message.warning('Pehle kam az kam ek user select karein');
    //   return;
    // }
    // message.info(`Change Role clicked for ${ selectedKeys.length } user(s)`);
  };

  return (
    <div className="flex min-h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <Header />
        <div className="flex flex-col gap-4 w-full h-full bg-slate-50 py-2 p-4 pr-6 overflow-auto">
          <h2 className="font-semibold text-2xl">
            User & Role —{ ' ' }
            <span className="font-normal">Configurations</span>
          </h2>
          <div className="bg-white p-3 shadow-lg h-fit w-full">
            <div className="mt-4">
              <MainTable
                headers={ HEADERS }
                data={ SEED_USERS }
                onAction={ handleAction }
                selectable
                disableInactiveRows
                onSelectionChange={ setSelectedKeys }
                toolbarActions={
                  <div className="flex items-center gap-3">
                    <Button
                      type="primary"
                      // onClick={ handleChangeRole }
                      style={ { background: '#ffb300', borderColor: '#ffb300', color: '#000' } }
                    >
                      ⇄ Change Role
                    </Button>
                    <Select value={ roleFilter } onChange={ setRoleFilter } style={ { width: 110 } }>
                      <Option value="All">All</Option>
                      <Option value="Admin">Admin</Option>
                      <Option value="IT">IT</Option>
                      <Option value="Finance">Finance</Option>
                    </Select>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}