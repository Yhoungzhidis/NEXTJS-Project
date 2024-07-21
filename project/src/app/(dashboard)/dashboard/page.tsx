// pages/index.js
import React from 'react';
import { LayoutGrid, User, DollarSign, BookOpen, FileText, Calendar, LogOut } from 'lucide-react';
import Sidebar from '@/components/sidebar/Sidebar';
import CourseDashboard from '@/components/dashboard/DashboardForm';

const Dashboard = () => {
  return (
    <div >
      {/* Sidebar */}
      

      {/* Main Content */}
      <main className="flex-3 p-0 ">
      <div className="p-0 border-b border-gray-200">
        <CourseDashboard/>
      </div>
      <div className="p-4">
        {/* Additional dashboard content can be added here */}
      </div>
        
        {/* Additional dashboard content can be added here */}
      </main>
    </div>
  );
};

export default Dashboard;