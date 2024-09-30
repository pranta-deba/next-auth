"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SocialSignIn = ({ loader, setLoader }) => {
    const router = useRouter();
    const session = useSession()

    const handleSocialSignIn = async (provider) => {
        setLoader(true)
        const res = await signIn(provider, { redirect: false });
    }
    if (session.status === "authenticated") {
        toast.success(`signed in successfully.`);
        router.push('/');
    }

    return (
        <div className="space-y-4">
            {/* Google Sign-In Button */}
            <button
                onClick={() => handleSocialSignIn('google')}
                disabled={loader}
                className="flex items-center justify-center w-full px-4 py-2 bg-green-500 rounded-md font-semibold text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    className="mr-2"
                >
                    <path
                        fill="white"
                        d="M44.5 20H24v8.5h11.9c-1.1 4-4.9 7-9.9 7-5.5 0-10-4.5-10-10s4.5-10 10-10c2.5 0 4.8.9 6.6 2.4L38 12.9C34.7 9.9 29.7 8 24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16c7.9 0 14.6-5.6 15.9-13h-12v-6.5h21v-1c0-1.1-.1-2.2-.4-3.2z"
                    />
                </svg>
                Sign in with Google
            </button>

            {/* GitHub Sign-In Button */}
            <button
                onClick={() => handleSocialSignIn('github')}
                disabled={loader}
                className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-2"
                    fill="currentColor"
                >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582v-2.11c-3.338.727-4.042-1.55-4.042-1.55-.546-1.387-1.333-1.758-1.333-1.758-1.09-.746.083-.73.083-.73 1.204.084 1.835 1.237 1.835 1.237 1.072 1.836 2.81 1.305 3.495.997.108-.775.42-1.304.763-1.603-2.665-.3-5.467-1.337-5.467-5.945 0-1.313.47-2.388 1.237-3.23-.124-.303-.536-1.52.117-3.165 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.553 3.295-1.23 3.295-1.23.656 1.645.244 2.863.12 3.165.77.842 1.237 1.917 1.237 3.23 0 4.62-2.807 5.638-5.482 5.93.43.37.815 1.102.815 2.222v3.293c0 .324.19.698.8.58C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                Sign in with GitHub
            </button>
        </div>
    );
};

export default SocialSignIn;
