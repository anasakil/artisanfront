import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';

const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout hasSider>
      <Sider width={200} style={{ background: '#fff' }}>
        <Sidebar />
      </Sider>
      <Layout style={{ paddingLeft: '200px' }}>
        <Header style={{ background: '#fff', padding: '0 20px' }}>Admin Panel</Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
