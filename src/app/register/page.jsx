"use client"

import SocialSignIn from "@/components/social_signin/SocialSignIn";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        setLoader(true)
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await fetch('http://localhost:3000/register/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await res.json();

        if (res.status === 200) {
            e.target.reset();
            setLoader(false)
            toast.success('registration successfully. Please Login!');
            router.push('/login');
        } else {
            setLoader(false)
            toast.error('Something went wrong! try again!');
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h1 className="mb-6 text-2xl font-semibold text-center text-pink-600">
                    Register
                </h1>

                <form onSubmit={handleRegister}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            autoComplete="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button disabled={loader} type="submit" className="w-full px-4 py-2 mb-4 text-white bg-pink-600 rounded-lg hover:bg-pink-700">
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-4">
                    <span className="absolute px-2 text-gray-500 bg-white">Or</span>
                    <div className="w-full h-px bg-gray-300"></div>
                </div>

                {/* Google Login Button */}
                <SocialSignIn loader={loader} setLoader={setLoader}/>
            </div>
        </div>
    );
};

export default page;