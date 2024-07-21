"use client";
import React from 'react';
import GetDate from './Getdate';
import { getTime } from './getTime';
import {ChevronRight, ChevronLeft, Camera, X,FileText, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const CourseDashboard = () => {
  // calling the getTime function from getTime.ts
  const timeOfDay = getTime();
  return (

    <div className="p-0 bg-gray-100 ">
    
    <GetDate/>
    
    <div className="mb-6">
    <h2 className="text-2xl font-bold">Good {timeOfDay} Guys😂!</h2>
        {timeOfDay === 'morning' && <p>Time to have a great start to your day!</p>}
        {timeOfDay === 'afternoon' && <p>Hope your day is going well!</p>}
        {timeOfDay === 'evening' && <p>Have a relaxing evening!</p>}
    </div>
      
  
    <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Your courses</h3>
              <a href="/courses" className="text-sm text-blue-600">View All</a>
            </div>
            <Card className="bg-white shadow-sm mb-4">
              <CardContent className="p-4 flex items-center">
                {/* <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div> */}
                <a href="/courses"><img src="/books.jpg" alt="Placeholder" className="w-12 h-12 bg-gray-200 rounded-lg mr-4"/> </a>

                <div>
                  <p className="font-semibold">Course One</p>
                  <p className="text-xs text-gray-500">12 lessons • 6h 30min • Beginner</p>
                  <p className="text-xs text-gray-500">Michael Brown</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4 flex items-center">
              <a href="/courses"><img src="/books.jpg" alt="Placeholder" className="w-12 h-12 bg-gray-200 rounded-lg mr-4"/> </a>
                <div>
                  <p className="font-semibold">Course Two</p>
                  <p className="text-xs text-gray-500">8 lessons • 4h 15min • Beginner</p>
                  <p className="text-xs text-gray-500">Mary Smith</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-sm mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Course Task</CardTitle>
                <a href="/assignments" className="text-sm text-blue-600">View All</a>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['Assignment 2', 'LAB report', 'Interim Assessment'].map((task, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                        {index === 0 && <Book size={16} className="text-indigo-600" />}
                        {index === 1 && <Book size={16} className="text-indigo-600" />}
                        {index === 2 && <Book size={16} className="text-indigo-600" />}
                      </div>
                      <span className="text-sm">{task}</span>
                    </div>
                
                      <a href="/assignments">
                        <ChevronRight size={16} className="text-gray-400 transform" />  
                      </a>

                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Course Task</CardTitle>
                <a href="/assignments" className="text-sm text-blue-600">View All</a>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['Assignment 2', 'LAB report', 'Interim Assessment'].map((task, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                        {index === 0 && <Book size={16} className="text-indigo-600" />}
                        {index === 1 && <Book size={16} className="text-indigo-600" />}
                        {index === 2 && <Book size={16} className="text-indigo-600" />}
                      </div>
                      <span className="text-sm">{task}</span>
                    </div>
                
                      <a href="/assignments">
                        <ChevronRight size={16} className="text-gray-400 transform" />  
                      </a>

                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">Course Task</CardTitle>
                <a href="/assignments" className="text-sm text-blue-600">View All</a>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['Assignment 2', 'LAB report', 'Interim Assessment'].map((task, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                        {index === 0 && <Book size={16} className="text-indigo-600" />}
                        {index === 1 && <Book size={16} className="text-indigo-600" />}
                        {index === 2 && <Book size={16} className="text-indigo-600" />}
                      </div>
                      <span className="text-sm">{task}</span>
                    </div>
                
                      <a href="/assignments">
                        <ChevronRight size={16} className="text-gray-400 transform" />  
                      </a>

                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

     
  );
};

export default CourseDashboard;