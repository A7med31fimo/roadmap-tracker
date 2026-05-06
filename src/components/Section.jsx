// src/components/Section.jsx
import React from 'react';
import { CheckSquare, Square, ChevronDown, ChevronRight, Target, Calendar } from 'lucide-react';

const Section = ({
    section,
    data,
    isExpanded,
    toggleSection,
    sectionProgress,
    progress,
    notes,
    toggleItem,
    updateNote
}) => {
    return (
        <div className="bg-red-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div
                className="p-5 cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 dark:hover:from-gray-700 hover:to-blue-50 dark:hover:to-gray-700 transition-all"
                onClick={() => toggleSection(section)}
            >
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1">
                        {isExpanded ? (
                            <ChevronDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        ) : (
                            <ChevronRight className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                        )}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{section}</h2>
                            <div className="flex gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1">
                                    <Target className="w-3 h-3" />
                                    {data.items.length} topics
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    ~{data.estimatedHours}h
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${sectionProgress === 100
                                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                                : sectionProgress > 50
                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}>
                            {sectionProgress}%
                        </span>
                        <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 shadow-inner">
                            <div
                                className={`h-2.5 rounded-full transition-all duration-300 ${sectionProgress === 100
                                        ? 'bg-green-500'
                                        : 'bg-gradient-to-r from-purple-500 to-blue-500'
                                    }`}
                                style={{ width: `${sectionProgress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="px-5 pb-5 space-y-1 bg-gray-50 dark:bg-gray-900">
                    {data.items.map((item, idx) => {
                        const key = `${section}|||${item}`;
                        const isChecked = progress[key];
                        const note = notes[key] || '';

                        return (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-3 hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                                <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggleItem(section, item)}>
                                    {isChecked ? (
                                        <CheckSquare className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className={`flex-1 ${isChecked ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                        {item}
                                    </span>
                                </div>
                                {isChecked && (
                                    <div className="mt-2 ml-8">
                                        <input
                                            type="text"
                                            placeholder="Add notes..."
                                            value={note}
                                            onChange={(e) => updateNote(section, item, e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-2">📚 Resources:</div>
                        <div className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                            {data.resources.map((resource, idx) => (
                                <div key={idx}>• {resource}</div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section;