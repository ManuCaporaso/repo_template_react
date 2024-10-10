import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Having difficulties using the product',
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.violet[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Missing features I need',
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.violet[700],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[800],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Not satisfied about the quality of the product',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.sky[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'The product doesn’t look as advertised',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.green[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.gray[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.gray[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Manuel</h2>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard11;
