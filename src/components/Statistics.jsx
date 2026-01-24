// src/components/Statistics.jsx
import React from 'react';
import { TrendingUp } from 'lucide-react';

const Statistics = ({ stats }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl p-6 mb-6 border border-purple-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">{stats.completedItems}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">{stats.totalItems}</div>
                    <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">{stats.totalHours}h</div>
                    <div className="text-sm text-gray-600">Est. Hours</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700">{stats.estimatedHoursRemaining}h</div>
                    <div className="text-sm text-gray-600">Remaining</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;