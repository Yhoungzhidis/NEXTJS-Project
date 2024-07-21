"use client";

import React, { useState } from 'react';
import { User, Mail, Briefcase, MapPin, Calendar, ChevronRight, ChevronLeft, Camera, X,FileText, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    job: 'Software Developer',
    location: 'San Francisco, CA',
    joinDate: 'January 2020',
    bio: 'Passionate about creating intuitive and efficient web applications.',
    avatar: '/noavatar.jpg'
  });

  return (
    // <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md mb-6 rounded-xl overflow-hidden ">
      <div className="bg-white shadow-md mb-6 rounded-xl overflow-hidden">
        <div className="md:flex ">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={user.avatar} alt={user.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.name}</div>
            <p className="mt-2 text-gray-500">{user.bio}</p>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-gray-500">{user.email}</span>
              </div>
              <div className="flex items-center mt-2">
                <Briefcase className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-gray-500">{user.job}</span>
              </div>
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-gray-500">{user.location}</span>
              </div>
              <div className="flex items-center mt-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-gray-500">Joined {user.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ProfilePage;