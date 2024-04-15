import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, updateUser, deleteUser, usersSelector } from '../../features/users/usersSlice';
import { Layout, Button, Table, Input, Modal, Form, Pagination, message , Popconfirm ,Tag} from 'antd';
import Sidebar from './Sidebar';  
const { Content, Footer } = Layout;

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(usersSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({ _id: '', username: '', email: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  const pageSize = 5;

  useEffect(() => {
    document.title = "User Management - Admin";
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUpdate = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId))
      .then(() => message.success('User deleted successfully'))
      .catch(err => message.error('Failed to delete user'));
  };

  const onFinish = (values) => {
    dispatch(updateUser({ id: currentUser._id, user: values }))
      .then(() => {
        message.success('User updated successfully');
        setIsModalVisible(false);
      })
      .catch(err => message.error('Failed to update user'));
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const columns = [
    { title: 'ID', dataIndex: '_id', key: 'id' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Role', 
      dataIndex: 'role', 
      key: 'role',
      render: role => {
        let color = 'green';
        if (role === 'admin') {
          color = 'blue';
        } else if (role === 'seller') {
          color = 'volcano'; 
        }
       return (
          <Tag color={color} key={role}>
            {role.toUpperCase()}
          </Tag>
        );
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button onClick={() => handleUpdate(record)} type="default">Update</Button>
          <Popconfirm
            title="Are you sure delete this user?"
            onConfirm={() => handleDelete(record._id)}
            onCancel={() => console.log('Delete canceled')}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" style={{ marginLeft: 8 }}>Delete</Button>
          </Popconfirm>
        </>
      ),
    }
  ];

  return (
    <Layout>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Table dataSource={users} columns={columns} rowKey="_id" pagination={false} />
            <Pagination
              size="small"
              total={users.length}
              showSizeChanger
              showQuick Jumper
              onChange={handlePageChange}
              current={currentPage}
              pageSize={pageSize}
            />
            <Modal title="Update User"   open={isModalVisible} onCancel={handleCancel} footer={null}>
              <Form layout="vertical" onFinish={onFinish} initialValues={currentUser}>
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input the username!' }]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                  <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">Update</Button>
              </Form>
            </Modal>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserManagement;
