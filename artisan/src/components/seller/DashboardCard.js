import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';

function StatCard({ icon: Icon, bgColor, title, value, change }) {
  return (
    <div className="flex p-4 rounded-lg shadow-md bg-white">
      <div className={`rounded-full h-12 w-12 flex items-center justify-center ${bgColor}`}>
        <Icon className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">{title}</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">{value}</strong>
          <span className={`text-sm ${change.includes('-') ? 'text-red-500' : 'text-green-500'} pl-2`}>{change}</span>
        </div>
      </div>
    </div>
  );
}

export default function DashboardStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <StatCard icon={IoBagHandle} bgColor="bg-sky-500" title="Total Sales" value="$54,232" change="+343" />
      <StatCard icon={IoPieChart} bgColor="bg-orange-600" title="Total Expenses" value="$3,423" change="-343" />
      <StatCard icon={IoPeople} bgColor="bg-yellow-400" title="Total Customers" value="12,313" change="-30" />
      <StatCard icon={IoCart} bgColor="bg-green-600" title="Total Orders" value="16,432" change="-43" />
    </div>
  );
}
