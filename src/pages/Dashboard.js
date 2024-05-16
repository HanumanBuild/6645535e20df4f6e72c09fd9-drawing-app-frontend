import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

const Dashboard = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current);
        canvas.setHeight(500);
        canvas.setWidth(800);

        // Add more canvas setup and event listeners here

        return () => {
            canvas.dispose();
        };
    }, []);

    const saveDrawing = async () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL();
        try {
            const response = await axios.post(`${process.env.DRAWING_APP_BACKEND_URL}/drawings`, { data: dataURL });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl mb-4">Dashboard</h2>
            <canvas ref={canvasRef} className="border border-gray-300"></canvas>
            <button onClick={saveDrawing} className="bg-blue-500 text-white p-2 rounded mt-4">Save Drawing</button>
        </div>
    );
};

export default Dashboard;