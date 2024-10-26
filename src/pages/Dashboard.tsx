// Dashboard.tsx
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Cell, ResponsiveContainer, Tooltip, Legend, XAxis, YAxis, CartesianGrid
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const impressionsData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 3000 },
];

const clicksData = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 100 },
  { name: 'Mar', value: 300 },
  { name: 'Apr', value: 150 },
  { name: 'May', value: 250 },
];

const conversionData = [
  { name: 'A', value: 2400 },
  { name: 'B', value: 4567 },
  { name: 'C', value: 1398 },
  { name: 'D', value: 9800 },
];

const revenueData = [
  { name: 'Jan', value: 1500 },
  { name: 'Feb', value: 2000 },
  { name: 'Mar', value: 1800 },
  { name: 'Apr', value: 2400 },
];

const ageDistributionData = [
  { age: '18-24', value: 35 },
  { age: '25-34', value: 50 },
  { age: '35-44', value: 20 },
  { age: '45-54', value: 15 },
  { age: '55+', value: 10 },
];

const engagementData = [
  { subject: 'Facebook', A: 120, fullMark: 150 },
  { subject: 'Twitter', A: 98, fullMark: 150 },
  { subject: 'Instagram', A: 86, fullMark: 150 },
  { subject: 'LinkedIn', A: 99, fullMark: 150 },
  { subject: 'YouTube', A: 85, fullMark: 150 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Insights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Impressions Line Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg w-full h-64">
          <h3 className="text-lg font-semibold mb-4">Monthly Impressions</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={impressionsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Clicks Bar Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg w-full h-64">
          <h3 className="text-lg font-semibold mb-4">Monthly Clicks</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={clicksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Pie Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg w-full h-64">
          <h3 className="text-lg font-semibold mb-4">Conversion Breakdown</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={conversionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {conversionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Area Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg w-full h-64">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Age Distribution Pie Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg w-full h-64">
          <h3 className="text-lg font-semibold mb-4">Audience Age Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={ageDistributionData} dataKey="value" nameKey="age" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {ageDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Social Media Engagement Radar Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg w-full h-64">
          <h3 className="text-lg font-semibold mb-4">Social Media Engagement</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={engagementData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Engagement" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
