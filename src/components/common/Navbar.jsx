"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const path = usePathname();
    const session = useSession();
    console.log(session);


    return (
        <div className='flex justify-center gap-5 py-6 bg-pink-600 text-white font-bold'>
            <Link href={"/"} className={`${path === "/" ? "underline" : ""}`}>Home</Link>
            <Link href={"/about"} className={`${path === "/dashboard" ? "underline" : ""}`}>About</Link>

            {session?.status === "unauthenticated" && <><Link href={"/login"} className={`${path === "/login" ? "underline" : ""}`}>Login</Link>
                <Link href={"/register"} className={`${path === "/register" ? "underline" : ""}`}>Register</Link></>
            }
            {session?.status === "authenticated" && <><button onClick={() => signOut()}>Logout</button></>
            }
            {session?.status === "loading" && <><button>loading....</button></>
            }
        </div>
    );
};

export default Navbar;