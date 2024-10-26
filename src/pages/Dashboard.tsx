import React, { useState } from 'react';
import { LineChart,  PieChart, Pie, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Cell, ResponsiveContainer, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ArrowUp, ArrowDown, Users, DollarSign, MousePointer, Eye } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Data definitions remain the same as in your original code
const impressionsData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 3000 },
];

// const clicksData = [
//   { name: 'Jan', value: 200 },
//   { name: 'Feb', value: 100 },
//   { name: 'Mar', value: 300 },
//   { name: 'Apr', value: 150 },
//   { name: 'May', value: 250 },
// ];

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

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('month');

  interface StatCardProps {
    title: string;
    value: string;
    change: number;
    icon: React.ReactNode;
    color: string;
  }

  const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className={`flex items-center space-x-1 text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );

  const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="p-6 h-80">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="mt-2 text-gray-600">Track your key metrics and performance indicators</p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                timeRange === range
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Impressions"
          value="14,000"
          change={12}
          icon={<Eye className="text-blue-600" size={24} />}
          color="bg-blue-100"
        />
        <StatCard
          title="Total Clicks"
          value="1,000"
          change={-5}
          icon={<MousePointer className="text-green-600" size={24} />}
          color="bg-green-100"
        />
        <StatCard
          title="Active Users"
          value="8,234"
          change={18}
          icon={<Users className="text-purple-600" size={24} />}
          color="bg-purple-100"
        />
        <StatCard
          title="Revenue"
          value="$7,700"
          change={24}
          icon={<DollarSign className="text-yellow-600" size={24} />}
          color="bg-yellow-100"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Impressions Trend */}
        <div className="col-span-1 xl:col-span-2">
          <ChartCard title="Impressions Trend">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={impressionsData}>
                <defs>
                  <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0088FE" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#0088FE"
                  fillOpacity={1}
                  fill="url(#colorImpressions)"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Conversion Breakdown */}
        <ChartCard title="Conversion Breakdown">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={conversionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {conversionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Social Media Engagement */}
        <ChartCard title="Social Media Engagement">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={engagementData}>
              <PolarGrid stroke="#e5e5e5" />
              <PolarAngleAxis dataKey="subject" stroke="#888" />
              <PolarRadiusAxis stroke="#888" />
              <Radar
                name="Engagement"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Age Distribution */}
        <ChartCard title="Audience Age Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ageDistributionData}
                dataKey="value"
                nameKey="age"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {ageDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Monthly Revenue */}
        <div className="col-span-1 xl:col-span-1">
          <ChartCard title="Revenue Trend">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #f0f0f0' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;