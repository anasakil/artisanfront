import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from './index';

const recentArtisanOrders = [
  {
    id: '1',
    product_id: '1234',
    customer_id: '23143',
    customer_name: 'Fatima Zahra Benbrahim',
    order_date: '2024-04-18T09:35:00',
    order_total: '$175.00',
    current_order_status: 'PLACED',
    shipment_address: 'Casablanca, Morocco'
  },
  {
    id: '2',
    product_id: '5678',
    customer_id: '96453',
    customer_name: 'Youssef El Amrani',
    order_date: '2024-04-17T13:42:00',
    order_total: '$210.00',
    current_order_status: 'SHIPPED',
    shipment_address: 'Rabat, Morocco'
  },
  {
    id: '3',
    product_id: '9101',
    customer_id: '65345',
    customer_name: 'Nadia Bensouda',
    order_date: '2024-04-15T10:20:00',
    order_total: '$98.00',
    current_order_status: 'DELIVERED',
    shipment_address: 'Marrakesh, Morocco'
  },
  {
    id: '4',
    product_id: '1121',
    customer_id: '87832',
    customer_name: 'Omar Chakir',
    order_date: '2024-04-14T08:15:00',
    order_total: '$50.00',
    current_order_status: 'DELIVERED',
    shipment_address: 'Fes, Morocco'
  },
  {
    id: '5',
    product_id: '3141',
    customer_id: '77654',
    customer_name: 'Amina El Kadi',
    order_date: '2024-04-13T17:55:00',
    order_total: '$65.00',
    current_order_status: 'SHIPPED',
    shipment_address: 'Tangier, Morocco'
  },
  {
    id: '6',
    product_id: '5161',
    customer_id: '33221',
    customer_name: 'Mehdi Berrada',
    order_date: '2024-04-12T11:30:00',
    order_total: '$120.00',
    current_order_status: 'PLACED',
    shipment_address: 'Agadir, Morocco'
  },
  {
    id: '7',
    product_id: '7878',
    customer_id: '98732',
    customer_name: 'Sofia El Fassi',
    order_date: '2024-04-11T14:20:00',
    order_total: '$85.00',
    current_order_status: 'SHIPPED',
    shipment_address: 'Essaouira, Morocco'
  },
  {
    id: '8',
    product_id: '3456',
    customer_id: '12345',
    customer_name: 'Mohammed Oulad Ali',
    order_date: '2024-04-10T09:10:00',
    order_total: '$220.00',
    current_order_status: 'DELIVERED',
    shipment_address: 'Ouarzazate, Morocco'
  },
  {
    id: '9',
    product_id: '9876',
    customer_id: '56789',
    customer_name: 'Hajar Zouhair',
    order_date: '2024-04-09T16:45:00',
    order_total: '$150.00',
    current_order_status: 'PLACED',
    shipment_address: 'El Jadida, Morocco'
  },
  {
    id: '10',
    product_id: '6789',
    customer_id: '54321',
    customer_name: 'Yassin Lahcen',
    order_date: '2024-04-08T10:55:00',
    order_total: '$95.00',
    current_order_status: 'DELIVERED',
    shipment_address: 'Tetouan, Morocco'
  }
];

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentArtisanOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                </td>
                <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
