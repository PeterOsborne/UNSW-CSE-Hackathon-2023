import React from 'react';

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-3">
              We are the team behind the Parking Spot Booking App, dedicated to providing you with a seamless parking experience. 
            </p>
            <p className="text-gray-700 mb-3"> 
                By facilitating the listing and booking of parking spots, our app aims to create a more convenient and hassle-free parking environment for all users.
            </p>
            <p className="text-gray-700 mb-3">
                Created by:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-gray-700 mb-2">
                <span className="font-bold">Sam Katz</span>
              </li>
              <li className="text-gray-700 mb-2">
                <span className="font-bold">Matthew Lim</span>
              </li>
              <li className="text-gray-700 mb-2">
                <span className="font-bold">Peter Osborne</span>
              </li>
              <li className="text-gray-700 mb-2">
                <span className="font-bold">Matthew Morris</span>
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Jesse Herdan</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              We believe that finding and booking parking spots should be hassle-free. Our app aims to simplify the process and save your time. If you have any questions or feedback, please don't hesitate to reach out to us.
            </p>
          </div>
        </div>
      );
}