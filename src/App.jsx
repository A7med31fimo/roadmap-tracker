// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Section from './components/Section';
import { roadmapData } from './data/roadmapData';
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

  // Load data from storage
  useEffect(() => {
    const loadData = () => {
      try {
        const stored = localStorage.getItem('dotnet-progress-v2');
        if (stored) {
          const data = JSON.parse(stored);
          setProgress(data.progress || {});
          setLevel(data.level || 'beginner');
          setNotes(data.notes || {});
        }
      } catch (error) {
        console.log('Starting fresh');
      }
    };
    loadData();
  }, []);

  // Save data
  const saveData = (newProgress, newLevel, newNotes) => {
    try {
      localStorage.setItem('dotnet-progress-v2', JSON.stringify({
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
    if (window.confirm('Are you sure? This will delete all your progress and notes.')) {
      setProgress({});
      setNotes({});
      await saveData({}, level, {});
    }
  };

  const handleExportData = () => {
    exportDataUtil(progress, level, notes);
  };

  const handleImportData = (e) => {
    importDataUtil(e.target.files[0], setProgress, setLevel, setNotes, saveData);
  };

  const filteredSections = getLevelSections(level, roadmapData).filter(([section, data]) => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const sectionMatch = section.toLowerCase().includes(searchLower);
      const itemsMatch = data.items.some(item => item.toLowerCase().includes(searchLower));
      return sectionMatch || itemsMatch;
    }
    return true;
  });

  const overallProgress = calculateOverallProgress(roadmapData, progress);
  const stats = getStats(roadmapData, progress);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
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
              sectionProgress={calculateProgress(section, roadmapData, progress)}
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
            Reset All Progress
          </button>
          <p className="text-sm text-gray-600">
            Based on the .NET Developer Roadmap by Dr. Milan Milanović
          </p>
          <a
            href="https://github.com/milanm/DotNet-Developer-Roadmap"
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