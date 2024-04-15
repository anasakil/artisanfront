import React, { useState, useEffect } from 'react';
import { Layout, Card, Row, Col } from 'antd';
import Sidebar from './Sidebar';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const { Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([
    { name: 'Sellers', value: 300 },
    { name: 'Buyers', value: 700 },
  ]);

  const orderData = [
    { day: 'Monday', orders: 20 },
    { day: 'Tuesday', orders: 12 },
    { day: 'Wednesday', orders: 15 },
    { day: 'Thursday', orders: 10 },
    { day: 'Friday', orders: 18 },
    { day: 'Saturday', orders: 25 },
    { day: 'Sunday', orders: 22 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  useEffect(() => {
    const updateData = () => {
      setData([
        { name: 'Sellers', value: Math.floor(Math.random() * 1000) },
        { name: 'Buyers', value: Math.floor(Math.random() * 1000) }
      ]);
    };

    const interval = setInterval(updateData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Row gutter={16}>
              <Col span={12}>
                <Card title="User Distribution" bordered={false}>
                  <PieChart width={400} height={300}>
                    <Pie
                      data={data}
                      cx={200}
                      cy={150}
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Real-time Chat" bordered={false}>
                  <div>Chat interface would be here. Implement or integrate a chat solution based on project requirements.</div>
                </Card>
              </Col>
              <Col span={24}>
                <Card title="Order Statistics - Daily" bordered={false}>
                  <BarChart width={730} height={250} data={orderData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="orders" fill="#8884d8" />
                  </BarChart>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
