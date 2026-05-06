// src/components/RoadmapSelector.jsx
import React from 'react';
import { Code2, Server, Cpu } from 'lucide-react';

const RoadmapSelector = ({ selectedRoadmap, onRoadmapChange }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 mb-6 border border-purple-100 dark:border-purple-900">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                Choose Your Learning Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* .NET Roadmap Card */}
                <button
                    onClick={() => onRoadmapChange('dotnet')}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${selectedRoadmap === 'dotnet'
                            ? 'border-purple-600 bg-gradient-to-br from-purple-50 dark:from-purple-900 to-blue-50 dark:to-blue-900 shadow-lg scale-105'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md'
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${selectedRoadmap === 'dotnet'
                                ? 'bg-purple-600'
                                : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                            <Code2 className={`w-8 h-8 ${selectedRoadmap === 'dotnet'
                                    ? 'text-white'
                                    : 'text-gray-600 dark:text-gray-400'
                                }`} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                .NET Developer
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Master C#, ASP.NET Core, Entity Framework, and the complete Microsoft ecosystem
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">
                                    C# 13
                                </span>
                                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">
                                    .NET 9
                                </span>
                                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded">
                                    ASP.NET
                                </span>
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">
                                    Azure
                                </span>
                            </div>
                        </div>
                    </div>
                    {selectedRoadmap === 'dotnet' && (
                        <div className="absolute top-3 right-3">
                            <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                ✓ Selected
                            </div>
                        </div>
                    )}
                </button>

                {/* Laravel Roadmap Card */}
                <button
                    onClick={() => onRoadmapChange('laravel')}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${selectedRoadmap === 'laravel'
                            ? 'border-red-600 bg-gradient-to-br from-red-50 dark:from-red-900 to-orange-50 dark:to-orange-900 shadow-lg scale-105'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-700 hover:shadow-md'
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${selectedRoadmap === 'laravel'
                                ? 'bg-red-600'
                                : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                            <Server className={`w-8 h-8 ${selectedRoadmap === 'laravel'
                                    ? 'text-white'
                                    : 'text-gray-600 dark:text-gray-400'
                                }`} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                Laravel Developer
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Learn PHP, Laravel framework, Eloquent ORM, and modern web development
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded">
                                    PHP 8+
                                </span>
                                <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-xs font-medium rounded">
                                    Laravel 11
                                </span>
                                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-medium rounded">
                                    Livewire
                                </span>
                                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-medium rounded">
                                    Eloquent
                                </span>
                            </div>
                        </div>
                    </div>
                    {selectedRoadmap === 'laravel' && (
                        <div className="absolute top-3 right-3">
                            <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                ✓ Selected
                            </div>
                        </div>
                    )}
                </button>

                {/* Spring Boot Roadmap Card */}
                <button
                    onClick={() => onRoadmapChange('springboot')}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${selectedRoadmap === 'springboot'
                            ? 'border-green-600 bg-gradient-to-br from-green-50 dark:from-green-900 to-emerald-50 dark:to-emerald-900 shadow-lg scale-105'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-green-300 dark:hover:border-green-700 hover:shadow-md'
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${selectedRoadmap === 'springboot'
                                ? 'bg-green-600'
                                : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                            <Cpu className={`w-8 h-8 ${selectedRoadmap === 'springboot'
                                    ? 'text-white'
                                    : 'text-gray-600 dark:text-gray-400'
                                }`} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                Spring Boot Developer
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                Master Java, Spring Boot, Spring Security, Microservices, and Cloud-native development
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">
                                    Java 21
                                </span>
                                <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded">
                                    Spring Boot 3
                                </span>
                                <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-xs font-medium rounded">
                                    Microservices
                                </span>
                                <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded">
                                    Spring AI
                                </span>
                            </div>
                        </div>
                    </div>
                    {selectedRoadmap === 'springboot' && (
                        <div className="absolute top-3 right-3">
                            <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                ✓ Selected
                            </div>
                        </div>
                    )}
                </button>
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                    💡 <strong>Tip:</strong> Your progress is saved separately for each roadmap.
                    Switch anytime to track multiple learning paths!
                </p>
            </div>
        </div>
    );
};

export default RoadmapSelector;
