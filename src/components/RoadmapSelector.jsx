// src/components/RoadmapSelector.jsx
import React from 'react';
import { Code2, Server } from 'lucide-react';

const RoadmapSelector = ({ selectedRoadmap, onRoadmapChange }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl p-6 mb-6 border border-purple-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Choose Your Learning Path
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* .NET Roadmap Card */}
                <button
                    onClick={() => onRoadmapChange('dotnet')}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${selectedRoadmap === 'dotnet'
                            ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg scale-105'
                            : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${selectedRoadmap === 'dotnet'
                                ? 'bg-purple-600'
                                : 'bg-gray-100'
                            }`}>
                            <Code2 className={`w-8 h-8 ${selectedRoadmap === 'dotnet'
                                    ? 'text-white'
                                    : 'text-gray-600'
                                }`} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                .NET Developer
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Master C#, ASP.NET Core, Entity Framework, and the complete Microsoft ecosystem
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                    C# 13
                                </span>
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                                    .NET 9
                                </span>
                                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded">
                                    ASP.NET
                                </span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
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
                            ? 'border-red-600 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg scale-105'
                            : 'border-gray-200 bg-white hover:border-red-300 hover:shadow-md'
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${selectedRoadmap === 'laravel'
                                ? 'bg-red-600'
                                : 'bg-gray-100'
                            }`}>
                            <Server className={`w-8 h-8 ${selectedRoadmap === 'laravel'
                                    ? 'text-white'
                                    : 'text-gray-600'
                                }`} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Laravel Developer
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Learn PHP, Laravel framework, Eloquent ORM, and modern web development
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded">
                                    PHP 8+
                                </span>
                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                                    Laravel 11
                                </span>
                                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                                    Livewire
                                </span>
                                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
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
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                    💡 <strong>Tip:</strong> Your progress is saved separately for each roadmap.
                    Switch anytime to track multiple learning paths!
                </p>
            </div>
        </div>
    );
};

export default RoadmapSelector;