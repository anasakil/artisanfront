import React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; 
import { logout } from '../../utils/auth';

const PageHeader = () => {
    const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => logout(navigate('/login'))}> 
        Logout
      </Menu.Item>
   
    </Menu>
  );

  return (
    <div className="bg-[#001529] flex justify-between items-center px-5 py-3 ">
      <div className="text-white">
        <img src="" alt="Logo" className="h-8" />
      </div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar icon={<UserOutlined />} className="cursor-pointer" />
      </Dropdown>
    </div>
  );
};

export default PageHeader;
