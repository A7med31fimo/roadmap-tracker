// src/components/Statistics.jsx
import React from 'react';
import { TrendingUp } from 'lucide-react';

const Statistics = ({ stats }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 mb-6 border border-purple-100 dark:border-purple-900">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-purple-50 dark:from-purple-900 to-purple-100 dark:to-purple-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{stats.completedItems}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900 to-blue-100 dark:to-blue-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.totalItems}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 dark:from-green-900 to-green-100 dark:to-green-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">{stats.totalHours}h</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Est. Hours</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 dark:from-orange-900 to-orange-100 dark:to-orange-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.estimatedHoursRemaining}h</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Remaining</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;