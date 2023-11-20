"use client"
import React, { useState, useEffect } from 'react';

export default function Header() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-slate-600 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <img src="/logo.png" alt="Billion Minds Logo" className="w-16 h-auto" />
                <div className="relative">
                    <button onClick={toggleMenu} className="flex flex-col justify-around w-6 h-4">
                        <div className="w-full h-0.5 bg-white"></div>
                        <div className="w-full h-0.5 bg-white"></div>
                        <div className="w-full h-0.5 bg-white"></div>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-300 rounded-lg shadow-md">
                            <ul>
                                <li className="py-2 px-4 hover:bg-blue-500">My Account</li>
                                <li className="py-2 px-4 hover:bg-blue-500">My Company</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}