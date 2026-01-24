// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Section from './components/Section';
import RoadmapSelector from './components/RoadmapSelector';
import { DotNetRoadmapData } from './data/DotNetRoadmapData';
import { laravelRoadmapData } from './data/laravelRoadmapData';
import {
  calculateProgress,
  calculateOverallProgress,
  getLevelSections,
  getStats,
  exportData as exportDataUtil,
  importData as importDataUtil
} from './utils/utils';

const App = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [progress, setProgress] = useState({});
  const [level, setLevel] = useState('beginner');
  const [notes, setNotes] = useState({});
  const [showStats, setShowStats] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoadmap, setSelectedRoadmap] = useState('dotnet'); // 'dotnet' or 'laravel'

  // Get current roadmap data based on selection
  const currentRoadmapData = selectedRoadmap === 'dotnet' ? DotNetRoadmapData : laravelRoadmapData;

  // Load data from storage
  useEffect(() => {
    const loadData = () => {
      try {
        const stored = localStorage.getItem(`${selectedRoadmap}-progress-v2`);
        if (stored) {
          const data = JSON.parse(stored);
          setProgress(data.progress || {});
          setLevel(data.level || 'beginner');
          setNotes(data.notes || {});
        } else {
          // Reset when switching roadmaps if no data exists
          setProgress({});
          setNotes({});
          setLevel('beginner');
        }
      } catch (error) {
        console.log('Starting fresh');
        setProgress({});
        setNotes({});
      }
    };
    loadData();
  }, [selectedRoadmap]);

  // Save data to storage
  const saveData = (newProgress, newLevel, newNotes) => {
    try {
      localStorage.setItem(`${selectedRoadmap}-progress-v2`, JSON.stringify({
        progress: newProgress,
        level: newLevel,
        notes: newNotes
      }));
    } catch (error) {
      console.error('Failed to save:', error);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleItem = (section, item) => {
    const key = `${section}|||${item}`;
    const newProgress = {
      ...progress,
      [key]: !progress[key]
    };
    setProgress(newProgress);
    saveData(newProgress, level, notes);
  };

  const updateNote = (section, item, note) => {
    const key = `${section}|||${item}`;
    const newNotes = { ...notes, [key]: note };
    setNotes(newNotes);
    saveData(progress, level, newNotes);
  };

  const resetProgress = async () => {
    if (window.confirm('Are you sure? This will delete all your progress and notes for this roadmap.')) {
      setProgress({});
      setNotes({});
      saveData({}, level, {});
    }
  };

  const handleExportData = () => {
    exportDataUtil(progress, level, notes, selectedRoadmap);
  };

  const handleImportData = (e) => {
    importDataUtil(e.target.files[0], setProgress, setLevel, setNotes, saveData);
  };

  const handleRoadmapChange = (roadmap) => {
    setSelectedRoadmap(roadmap);
    setExpandedSections({}); // Reset expanded sections when switching
  };

  const filteredSections = getLevelSections(level, currentRoadmapData).filter(([section, data]) => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const sectionMatch = section.toLowerCase().includes(searchLower);
      const itemsMatch = data.items.some(item => item.toLowerCase().includes(searchLower));
      return sectionMatch || itemsMatch;
    }
    return true;
  });

  const overallProgress = calculateOverallProgress(currentRoadmapData, progress);
  const stats = getStats(currentRoadmapData, progress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <RoadmapSelector
          selectedRoadmap={selectedRoadmap}
          onRoadmapChange={handleRoadmapChange}
        />

        <Header
          overallProgress={overallProgress}
          stats={stats}
          level={level}
          setLevel={setLevel}
          showStats={showStats}
          setShowStats={setShowStats}
          exportData={handleExportData}
          handleImportData={handleImportData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          roadmapTitle={selectedRoadmap === 'dotnet' ? '.NET Developer Roadmap 2025' : 'Laravel Developer Roadmap 2024'}
        />

        {showStats && <Statistics stats={stats} />}

        <div className="space-y-4">
          {filteredSections.map(([section, data]) => (
            <Section
              key={section}
              section={section}
              data={data}
              isExpanded={expandedSections[section]}
              toggleSection={toggleSection}
              sectionProgress={calculateProgress(section, currentRoadmapData, progress)}
              progress={progress}
              notes={notes}
              toggleItem={toggleItem}
              updateNote={updateNote}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={resetProgress}
            className="text-sm text-red-600 hover:text-red-700 font-medium mb-4"
          >
            Reset All Progress for {selectedRoadmap === 'dotnet' ? '.NET' : 'Laravel'}
          </button>
          <p className="text-sm text-gray-600">
            {selectedRoadmap === 'dotnet'
              ? 'Based on the .NET Developer Roadmap by Dr. Milan Milanović'
              : 'Based on the Laravel Developer Roadmap by Nehal Hasnayeen'
            }
          </p>
          <a
            href={selectedRoadmap === 'dotnet'
              ? 'https://github.com/milanm/DotNet-Developer-Roadmap'
              : 'https://github.com/Hasnayeen/laravel-developer-roadmap'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-700 font-medium text-sm"
          >
            View Full Roadmap on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;