"use client";
import SocialSignIn from '@/components/social_signin/SocialSignIn';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const page = () => {
    const router = useRouter();
    const [loader, setLoader] = useState(false);

    const handleLogin = async (e) => {
        setLoader(true)
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })
        console.log(res);

        if (res.status === 200) {
            setLoader(false)
            toast.success('Login successful!');
            router.push('/');
        } else {
            setLoader(false)
            toast.error('Please provide a valid email and password!');
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h1 className="mb-6 text-2xl font-semibold text-center text-pink-600">
                    Login
                </h1>

                <form onSubmit={handleLogin}>
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
                            autoComplete="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button disabled={loader} className="w-full px-4 py-2 mb-4 text-white bg-pink-600 rounded-lg hover:bg-pink-700">
                        Login
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