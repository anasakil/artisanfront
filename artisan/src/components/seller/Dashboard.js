import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { Line } from '@ant-design/charts';

const Dashboard = () => {
  // Sample data for the line chart
  const data = [
    { month: 'Jan', sales: 1000 },
    { month: 'Feb', sales: 1200 },
    { month: 'Mar', sales: 1400 },
    { month: 'Apr', sales: 1500 },
    { month: 'May', sales: 1600 },
  ];

  // Configuration for the line chart
  const config = {
    data,
    xField: 'month',
    yField: 'sales',
    point: {
      size: 5,
      shape: 'diamond',
    },
    smooth: true,
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Sales Overview" bordered={false}>
            <Row gutter={16}>
              <Col span={8}>
                <Statistic title="Total Sales" value={112893} />
              </Col>
              <Col span={8}>
                <Statistic title="This Month" value={18393} />
              </Col>
              <Col span={8}>
                <Statistic title="Average Daily Sales" value={600} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <Card title="Sales Trend" bordered={false}>
            <Line {...config} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
