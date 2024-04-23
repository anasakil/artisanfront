import React from 'react'
import DashboardStatsGrid from '../seller2/DashboardStatsGrid'
import TransactionChart from '../seller2/TransactionChart'
import RecentOrders from '../seller2/RecentOrders'
import BuyerProfilePieChart from '../seller2/BuyerProfilePieChart'
import PopularProducts from '../seller2/PopularProducts'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  )
}