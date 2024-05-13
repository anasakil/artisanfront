import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, ShopOutlined, UploadOutlined ,BarChartOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse }) => {
  const items = [
    {
      key: '4',
      icon: <BarChartOutlined />,
      label: (<Link to="/AdminDashboard">Admin Dashboard</Link>),
    },
    {
      key: '1',
      icon: <UserOutlined />,
      label: (<Link to="/admin/users">User Management</Link>),
    },
    {
      key: '2',
      icon: <ShopOutlined />,
      label: (<Link to="/admin/categories">Category Management</Link>),
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: (<Link to="/admin/sellers">Seller Management</Link>),
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" items={items} /> 
    </Sider>
  );
};

export default Sidebar;
