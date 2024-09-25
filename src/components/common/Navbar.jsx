"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const path = usePathname();

    return (
        <div className='flex justify-center gap-5 py-6 bg-pink-600 text-white font-bold'>
            <Link href={"/"} className={`${path === "/" ? "underline" : ""}`}>Home</Link>
            <Link href={"/dashboard"} className={`${path === "/dashboard" ? "underline" : ""}`}>Profile</Link>
            <Link href={"/login"} className={`${path === "/login" ? "underline" : ""}`}>Login</Link>
            <Link href={"/register"} className={`${path === "/register" ? "underline" : ""}`}>Register</Link>
            <button>Logout</button>
        </div>
    );
};

export default Navbar;