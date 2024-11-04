import {useEffect, useState} from "react";
import Link from "next/link";
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
                <Link href={"/QuickNotes2"}>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow mx-auto block">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}
