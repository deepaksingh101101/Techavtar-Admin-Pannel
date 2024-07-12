'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const donutData = [
  { name: 'Total Orders', value: 400 },
  { name: 'Shipped', value: 300 },
  { name: 'Delivered', value: 200 },
  { name: 'Canceled', value: 100 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function DonutComp() {
  return (
    <div className='w-[100%]'>
      <h5 className='ms-8' >ORDER TRACKING STATS</h5>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={donutData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {donutData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
