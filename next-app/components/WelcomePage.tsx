import { SignInButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function WelcomePage() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 1000); // Adjust timing as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative w-full max-w-2xl mx-auto mb-16"> {/* Added mb-16 for button space */}
                <div className="absolute inset-0 transform rotate-3 scale-95 animate-spin-in-delayed-2">
                    <div className="bg-yellow-200 rounded-lg shadow-lg w-full h-full"></div>
                </div>
                <div className="absolute inset-0 transform -rotate-2 scale-98 animate-spin-in-delayed-1">
                    <div className="bg-yellow-100 rounded-lg shadow-lg w-full h-full"></div>
                </div>
                <div className="bg-yellow-50 rounded-lg shadow-lg p-8 transform rotate-1 animate-spin-in relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to QuickNotes</h1>
                        <p className="text-xl mb-8 text-gray-700">
                            Sign in to access our powerful post-it style quick-notes feature with smart reminders!
                        </p>
                        <ul className="text-left mb-8 text-gray-700 max-w-xs mx-auto">
                            <li className="flex items-center mb-2">
                                <span className="mr-2 flex-shrink-0">✅</span>
                                <span>Create post-it style notes</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="mr-2 flex-shrink-0">🕒</span>
                                <span>Automatic detection of todos and date-times</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="mr-2 flex-shrink-0">📧</span>
                                <span>Email reminders</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 flex-shrink-0">🔔</span>
                                <span>Push notifications</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
                <SignInButton mode="modal">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow mx-auto block">
                        Sign In to Get Started
                    </button>
                </SignInButton>
            </div>
        </div>
    );
}
