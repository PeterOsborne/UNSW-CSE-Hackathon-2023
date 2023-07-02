import React from 'react';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-700 mb-3 font-bold">
                    Contact us by phone at
                </p>
                <p className="text-gray-700 mb-3">
                    1800KARP
                </p>
                <p className="text-gray-700 mb-3 font-bold">
                    Contact us by email at
                </p>
                <p className="text-gray-700 mb-3">
                    Karp@karp.com
                </p>
                <p className="text-gray-700 mb-3 font-bold">
                    Join Live chat
                </p>
                <button>Here</button>
            </div>
            <div>
                <p className="text-gray-700 mt-4">
                    We believe that finding and booking parking spots should be hassle-free. If you have any questions or feedback, please don't hesitate to reach out to us.
                </p>
            </div>
        </div >
    );
}