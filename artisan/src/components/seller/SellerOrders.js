import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSellerOrders, updateSellerOrder, deleteSellerOrder } from '../../features/orders/ordersSlice';

const OrdersTable = () => {
    const { orders, status, error } = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getSellerOrders());
    }, [dispatch]);

    const handleDelete = (orderId) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            dispatch(deleteSellerOrder({ orderId, token }));
        }
    };

    const handleUpdate = (orderId, status) => {
        dispatch(updateSellerOrder({ orderId, status, token }));
    };

    return (
        <div>
            <h1>Orders</h1>
            {status === 'loading' ? <p>Loading...</p> : error ? <p>{error}</p> :
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleUpdate(order._id, 'Updated Status')}>Update Status</button>
                                <button onClick={() => handleDelete(order._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
};

export default OrdersTable;
