"use client"

const page = () => {
    const handleRegister = async (e) => {
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
        console.log(data);
        
        if (res.status === 200) {
            e.target.reset();
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
                    <button type="submit" className="w-full px-4 py-2 mb-4 text-white bg-pink-600 rounded-lg hover:bg-pink-700">
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-4">
                    <span className="absolute px-2 text-gray-500 bg-white">Or</span>
                    <div className="w-full h-px bg-gray-300"></div>
                </div>

                {/* Google Login Button */}
                <button
                    className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="24"
                        height="24"
                        className="mr-2"
                    >
                        <path
                            fill="#4285F4"
                            d="M44.5 20H24v8.5h11.9c-1.1 4-4.9 7-9.9 7-5.5 0-10-4.5-10-10s4.5-10 10-10c2.5 0 4.8.9 6.6 2.4L38 12.9C34.7 9.9 29.7 8 24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16c7.9 0 14.6-5.6 15.9-13h-12v-6.5h21v-1c0-1.1-.1-2.2-.4-3.2z"
                        />
                    </svg>
                    Sign up with Google
                </button>
            </div>
        </div>
    );
};

export default page;