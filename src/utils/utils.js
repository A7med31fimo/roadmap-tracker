// src/utils/utils.js

export const calculateProgress = (section, roadmapData, progress) => {
    const items = roadmapData[section].items;
    const completed = items.filter(item => progress[`${section}|||${item}`]).length;
    return Math.round((completed / items.length) * 100);
};

export const calculateOverallProgress = (roadmapData, progress) => {
    let total = 0;
    let completed = 0;
    Object.keys(roadmapData).forEach(section => {
        const items = roadmapData[section].items;
        total += items.length;
        completed += items.filter(item => progress[`${section}|||${item}`]).length;
    });
    return Math.round((completed / total) * 100);
};

export const getLevelSections = (selectedLevel, roadmapData) => {
    return Object.entries(roadmapData).filter(([_, data]) => data.level === selectedLevel);
};

export const getStats = (roadmapData, progress) => {
    const sections = Object.keys(roadmapData);
    let totalItems = 0;
    let completedItems = 0;
    let totalHours = 0;
    let estimatedHoursRemaining = 0;

    sections.forEach(section => {
        const items = roadmapData[section].items;
        const completed = items.filter(item => progress[`${section}|||${item}`]).length;
        totalItems += items.length;
        completedItems += completed;
        totalHours += roadmapData[section].estimatedHours || 0;

        const percentComplete = completed / items.length;
        estimatedHoursRemaining += (roadmapData[section].estimatedHours || 0) * (1 - percentComplete);
    });

    return {
        totalItems,
        completedItems,
        totalHours,
        estimatedHoursRemaining: Math.round(estimatedHoursRemaining),
        completionRate: Math.round((completedItems / totalItems) * 100)
    };
};

export const exportData = (progress, level, notes, roadmapType = 'dotnet') => {
    const data = {
        progress,
        level,
        notes,
        roadmapType,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${roadmapType}-roadmap-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
};

export const importData = (file, setProgress, setLevel, setNotes, saveData) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
        try {
            const data = JSON.parse(event.target.result);
            setProgress(data.progress || {});
            setLevel(data.level || 'beginner');
            setNotes(data.notes || {});
            await saveData(data.progress, data.level, data.notes);
            alert('Data imported successfully!');
        } catch (error) {
            alert('Error importing data. Please check the file format.');
        }
    };
    reader.readAsText(file);
};