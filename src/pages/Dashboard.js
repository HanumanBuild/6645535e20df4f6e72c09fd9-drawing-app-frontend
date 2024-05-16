import React from 'react';
import DrawingCanvas from '../components/DrawingCanvas';
import SavedDrawings from '../components/SavedDrawings';

const Dashboard = () => {
    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl mb-4">Dashboard</h2>
            <DrawingCanvas />
            <SavedDrawings />
        </div>
    );
};

export default Dashboard;