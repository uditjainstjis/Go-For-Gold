'use client'
import React from 'react';
import { Trophy, Users, Globe2, Rocket } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      value: "Amazing Prize Pool!",
      label: "Prize Pool",
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      value: "70+",
      label: "Participants",
    },
    {
      icon: <Globe2 className="h-8 w-8 text-yellow-500" />,
      value: "25+",
      label: "Teams",
    },
    {
      icon: <Rocket className="h-8 w-8 text-yellow-500" />,
      value: "10+",
      label: "Expert Coaches",
    },
  ];

  return (
    <div className="bg-white py-12 -mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl  shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}