import { useState } from 'react';
import { Select, Button } from 'antd';
import GenericConfigPage from '../componets/GenericConfigPage.jsx';
import arrow from '/arrow.png';

const { Option } = Select;

const HEADERS = ['Serial #', 'User Name', 'Login ID', 'Department', 'Current Role', 'Status', 'Action'];

const SEED_USERS = [
  {
    serial: '01',
    userName: 'Arbaz Ahmed',
    loginId: 'MCD00001234',
    department: 'IT',
    currentRole: 'User',
    status: 'Active'
  },
  {
    serial: '02',
    userName: 'Asad Ali',
    loginId: 'MCD00001256',
    department: 'Finance',
    currentRole: 'User',
    status: 'Active'
  },
  {
    serial: '03',
    userName: 'Ather Medmood',
    loginId: 'MCD00001287',
    department: 'Admin',
    currentRole: 'User',
    status: 'In Active'
  },
];

function toSeedUserDataRows(rows) {
  return rows.map((r) => [
    r.serial,
    r.userName,
    r.loginId,
    r.department,
    r.currentRole,
    r.status
  ])
}

function getAllSeedUsers(){
  return toSeedUserDataRows(SEED_USERS)
}

export default function UserRole ()
{
  const [roleFilter, setRoleFilter] = useState('Admin');
  const [selectedKeys, setSelectedKeys] = useState([]);
  
  const [users, setUsers] = useState(SEED_USERS.map(u => ({ loginId: u[2], status: u[5] })));

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

  const toolbarActions = (
    <div className="flex items-center gap-3">
      <Button
        type="primary"
        style={ { background: '#ffb300', borderColor: '#ffb300', color: '#000' } }
      >
        <img src={arrow} alt="arrow_icone" /> Change Role
      </Button>
      <Select value={ roleFilter } onChange={ setRoleFilter } style={ { width: 110 } }>
        <Option value="All">All</Option>
        <Option value="Admin">Admin</Option>
        <Option value="IT">IT</Option>
        <Option value="Finance">Finance</Option>
      </Select>
    </div>
  );

  return (
    <GenericConfigPage
      pageTitle="User & Role"
      pageSubtitle="Configurations"
      tableHeaders={ HEADERS }
      tableData={ getAllSeedUsers() }
      hideConfigHeader={ true }
      onAction={ handleAction }
      selectable={ true }
      onSelectionChange={ setSelectedKeys }
      toolbarActions={ toolbarActions }
      showStatusActions={true}
    />
  );
}