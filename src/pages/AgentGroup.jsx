import { useState } from 'react';
import { Select, Button } from 'antd';
import GenericConfigPage from '../componets/GenericConfigPage.jsx';
import arrow from '/arrow.png';

const { Option } = Select;

const HEADERS = ['Serial #', 'Agent Name', 'Main Category', '2nd Category', '3rd Category'];

const SEED_USERS = [
  ['01', 'Arbaz Ahmed', 'IT', 'Software', 'ERP'],
  ['02', 'Asad Ali', 'IT', 'Software, Hardware', 'OS, Mouse'],
  ['02', 'Ather Mehmood', 'IT, Admin', 'General Support, Transport', 'Cleaning Vehicle'],
];

export default function AgentGroup ()
{
  const [roleFilter, setRoleFilter] = useState('IT');
  const [secondRoleFilter, setSecondRoleFilter] = useState('ERP');
  const [selectedKeys, setSelectedKeys] = useState([]);

  // Fix the missing users state from the original code
  const [users, setUsers] = useState(SEED_USERS.map(u => ({ loginId: u[2], status: 'Active' })));

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
        <img src={arrow} alt="arrow_icone" /> Change Group
      </Button>
      <Select value={ roleFilter } onChange={ setRoleFilter } style={ { width: 110 } }>
        <Option value="IT">IT</Option>
        <Option value="Admin">Admin</Option>
        <Option value="Finance">Finance</Option>
        <Option value="Software">Software</Option>
      </Select>
      <Select value={ secondRoleFilter } onChange={ setSecondRoleFilter } style={ { width: 110 } }>
        <Option value="ERP">ERP</Option>
        <Option value="OS">OS</Option>
        <Option value="Mouse">Mouse</Option>
        <Option value="Cleaning">Cleaning</Option>
      </Select>
    </div>
  );

  return (
    <GenericConfigPage
      pageTitle="Agent Group"
      pageSubtitle="Configurations"
      tableHeaders={ HEADERS }
      tableData={ SEED_USERS }
      hideConfigHeader={ true }
      onAction={ handleAction }
      selectable={ true }
      disableInactiveRows={ true }
      onSelectionChange={ setSelectedKeys }
      toolbarActions={ toolbarActions }
    />
  );
}