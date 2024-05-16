import React, { useEffect, useState } from 'react';
import api from '../services/api';

const SavedDrawings = () => {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        const fetchDrawings = async () => {
            try {
                const response = await api.get('/api/drawings');
                setDrawings(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDrawings();
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl mb-4">Saved Drawings</h2>
            <div className="grid grid-cols-3 gap-4">
                {drawings.map((drawing) => (
                    <div key={drawing._id} className="border border-gray-300 p-4">
                        <img src={drawing.data} alt="Drawing" className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedDrawings;