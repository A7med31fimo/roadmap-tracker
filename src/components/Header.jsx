// src/components/Header.jsx
import React from 'react';
import { BookOpen, Award, BarChart3, Download, Upload, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = ({
    overallProgress,
    stats,
    level,
    setLevel,
    showStats,
    setShowStats,
    exportData,
    handleImportData,
    searchTerm,
    setSearchTerm,
    roadmapTitle
}) => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 mb-6 border border-purple-100 dark:border-purple-900">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <BookOpen className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{roadmapTitle}</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Track your journey to becoming an expert developer</p>
                    </div>
                </div>
                <Award className="w-10 h-10 text-yellow-500" />
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Overall Progress</span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{overallProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner">
                    <div
                        className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${overallProgress}%` }}
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
                    <span>{stats.completedItems} of {stats.totalItems} completed</span>
                    <span>~{stats.estimatedHoursRemaining}h remaining</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-between mb-4">
                <div className="flex gap-2">
                    {['beginner', 'intermediate', 'advanced'].map(lvl => (
                        <button
                            key={lvl}
                            onClick={() => setLevel(lvl)}
                            className={`px-4 py-2 rounded-lg font-medium capitalize transition-all shadow-sm ${level === lvl
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setShowStats(!showStats)}
                        className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                        title="Statistics"
                    >
                        <BarChart3 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                        onClick={exportData}
                        className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                        title="Export"
                    >
                        <Download className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                    <label className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 cursor-pointer" title="Import">
                        <Upload className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
                    </label>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                        title={isDark ? 'Light mode' : 'Dark mode'}
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
        </div>
    );
};

export default Header;