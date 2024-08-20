'use client'
import '../styles/styles.css'; 

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  name: string;
  wpm: number;
  accuracy: number;
}

const data: DataPoint[] = [
  { name: 'Jan', wpm: 55, accuracy: 92.3 },
  { name: 'Feb', wpm: 52, accuracy: 89.7 },
  { name: 'Mar', wpm: 58, accuracy: 94.1 },
  { name: 'Apr', wpm: 56, accuracy: 93.5 },
  { name: 'May', wpm: 54, accuracy: 91.2 },
  { name: 'Jun', wpm: 57, accuracy: 94.0 },
  { name: 'Jul', wpm: 56, accuracy: 92.3 },
];

const Chart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="wpm" fill="#10B981" />
        <Bar dataKey="accuracy" fill="#374151" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
