import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog
} from 'react-icons/hi'
import { Link } from 'react-router-dom';


export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: (<Link to="/seller/Dashboard">Dashboard</Link>),
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'products',
    label: (<Link to="/seller/products">Products</Link>),
    icon: <HiOutlineCube />
  },
  {
    key: 'orders',
    label: (<Link to="/seller/orders">Orders</Link>),
    icon: <HiOutlineShoppingCart />
  },
  {
    key: 'customers',
    label: (<Link to="/seller/customers">Customers</Link>),
    path: '/customers',
    icon: <HiOutlineUsers />
  },
  {
    key: 'payment',
    label: (<Link to="/seller/payment">Payment</Link>),
    icon: <HiOutlineDocumentText />
  },

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: (<Link to="/seller/settings">Messages</Link>),
    icon: <HiOutlineCog />
  },
  {
    key: 'support',
    label: (<Link to="/seller/support">Support</Link>),
    icon: <HiOutlineQuestionMarkCircle />
  }
]