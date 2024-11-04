import { SignInButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import {WelcomeMessageStack} from "@/components/blocks/WelcomeMessageStack";

export default function WelcomePage() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 1000); // Adjust timing as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <WelcomeMessageStack/>
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
