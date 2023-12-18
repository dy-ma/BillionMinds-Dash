"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-slate-600 w-full h-[7vh]">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/">
                    <Image src="/logo.png" alt="Billion Minds Logo" className="w-16 h-auto" width={1080} height={1080} />
                </a>
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