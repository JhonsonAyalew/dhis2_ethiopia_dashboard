import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend, ComposedChart, Line
} from 'recharts';
import { 
  FiActivity, FiUsers, FiCheckCircle, FiAlertTriangle, 
  FiDownload, FiFilter, FiRefreshCw, FiLayout, FiPieChart, FiMoreVertical, FiSearch 
} from 'react-icons/fi';
import './App.css';

// --- Components ---

const StatCard = ({ title, value, change, icon: Icon, colorClass }) => (
  <div className="stat-card">
    <div className={`icon-wrapper ${colorClass}`}>
      <Icon size={22} />
    </div>
    <div className="stat-content">
      <p className="stat-label">{title}</p>
      <div className="stat-value-row">
        <h3>{value}</h3>
        <span className={`stat-badge ${change.startsWith('+') ? 'positive' : 'negative'}`}>
          {change}
        </span>
      </div>
    </div>
  </div>
);

const ChartWrapper = ({ title, children }) => (
  <div className="card-panel">
    <div className="card-header">
      <h4>{title}</h4>
      <button className="icon-btn-ghost"><FiMoreVertical /></button>
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>
);

const DataTable = () => (
  <div className="card-panel table-panel">
    <div className="card-header">
      <h4>Recent Facility Reports</h4>
      <button className="btn-text">View All</button>
    </div>
    <div className="table-responsive">
      <table className="modern-table">
        <thead>
          <tr>
            <th>Facility Name</th>
            <th>Region</th>
            <th>Status</th>
            <th>Submission Date</th>
            <th>Completeness</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Tikur Anbessa Hospital", region: "Addis Ababa", status: "Verified", date: "Oct 24, 2024", score: 98 },
            { name: "Adama General Hospital", region: "Oromia", status: "Pending", date: "Oct 23, 2024", score: 85 },
            { name: "Bahir Dar Health Ctr", region: "Amhara", status: "Verified", date: "Oct 22, 2024", score: 92 },
            { name: "Hawassa Referral", region: "Sidama", status: "Late", date: "Oct 20, 2024", score: 64 },
          ].map((row, i) => (
            <tr key={i}>
              <td className="fw-bold">{row.name}</td>
              <td>{row.region}</td>
              <td><span className={`status-pill ${row.status.toLowerCase()}`}>{row.status}</span></td>
              <td>{row.date}</td>
              <td>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${row.score}%` }}></div>
                </div>
                <span className="progress-text">{row.score}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Main Dashboard ---

const MOCK_DATA = [
  { name: 'Jan', anc1: 4000, anc2: 2400, rate: 85 },
  { name: 'Feb', anc1: 3000, anc2: 1398, rate: 78 },
  { name: 'Mar', anc1: 2000, anc2: 9800, rate: 90 },
  { name: 'Apr', anc1: 2780, anc2: 3908, rate: 82 },
  { name: 'May', anc1: 1890, anc2: 4800, rate: 75 },
  { name: 'Jun', anc1: 2390, anc2: 3800, rate: 88 },
];

const PIE_DATA = [
  { name: 'On Time', value: 400 },
  { name: 'Late', value: 300 },
  { name: 'Missing', value: 100 },
];
const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="app-sidebar">
        <div className="logo-section">
          <div className="logo-icon">D</div>
          <span className="logo-text">DHIS2 <strong>Insight</strong></span>
        </div>
        
        <div className="nav-section">
          <p className="nav-label">MAIN MENU</p>
          <div className="nav-item active"><FiLayout /> Dashboard</div>
          <div className="nav-item"><FiActivity /> Analytics</div>
          <div className="nav-item"><FiPieChart /> Reports</div>
        </div>

        <div className="nav-section">
          <p className="nav-label">SETTINGS</p>
          <div className="nav-item"><FiUsers /> Users</div>
          <div className="nav-item"><FiFilter /> Configuration</div>
        </div>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">JA</div>
            <div className="user-info">
              <p className="user-name">Jhonson A.</p>
              <p className="user-role">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-viewport">
        {/* Top Header */}
        <header className="main-header">
          <div className="search-wrapper">
            <FiSearch className="search-icon"/>
            <input type="text" placeholder="Search indicators, org units..." />
          </div>
          <div className="header-actions">
            <button className="btn-secondary"><FiRefreshCw /> Sync</button>
            <button className="btn-primary"><FiDownload /> Export Report</button>
          </div>
        </header>

        {/* Filter Bar */}
        <section className="controls-bar">
          <div className="filter-group">
            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="modern-select">
              <option>All Regions</option>
              <option>Addis Ababa</option>
              <option>Amhara</option>
            </select>
            <input type="date" className="modern-date" />
          </div>
          <div className="live-indicator">
            <span className="blink-dot"></span> Live Data Stream
          </div>
        </section>

        {/* 4-Column Stats */}
        <section className="stats-grid">
          <StatCard title="ANC 1 Coverage" value="92.4%" change="+2.5%" icon={FiActivity} colorClass="blue" />
          <StatCard title="Total Deliveries" value="14,201" change="-0.4%" icon={FiUsers} colorClass="green" />
          <StatCard title="Reporting Rate" value="98.1%" change="+1.2%" icon={FiCheckCircle} colorClass="purple" />
          <StatCard title="Alerts Flagged" value="12" change="+5" icon={FiAlertTriangle} colorClass="red" />
        </section>

        {/* Complex Charts Section */}
        <section className="dashboard-grid">
          {/* Main Area Chart */}
          <div className="col-span-2">
            <ChartWrapper title="ANC Coverage Trend (Last 6 Months)">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={MOCK_DATA}>
                  <defs>
                    <linearGradient id="colorAnc1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dx={-10} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                  <Area type="monotone" dataKey="anc1" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAnc1)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartWrapper>
          </div>

          {/* Pie Chart */}
          <ChartWrapper title="Data Quality Status">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie data={PIE_DATA} innerRadius={70} outerRadius={90} paddingAngle={5} dataKey="value" stroke="none">
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </section>

        {/* Bottom Table Section */}
        <section className="table-section">
          <DataTable />
        </section>

      </main>
    </div>
  );
}
