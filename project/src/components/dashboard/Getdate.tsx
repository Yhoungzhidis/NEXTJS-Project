"use client";
import React, {useState, useEffect} from 'react';
import { Search, Bell} from 'lucide-react';

const GetDate = () => {
 
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  };

  return (
    
    
      <div className="flex justify-between items-center mb-6">
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses"
            className="pl-10 pr-4 py-2 border rounded-full w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        
        
        <div className="flex items-center space-x-4 ">
          <p className="text-sm text-gray-600 ">{formatDate(currentDateTime)}</p>
          <p className="text-sm text-gray-600">{formatTime(currentDateTime)}</p>
          <Bell className="text-gray-600" size={20} />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        
      </div>

     
  );
};

export default GetDate;