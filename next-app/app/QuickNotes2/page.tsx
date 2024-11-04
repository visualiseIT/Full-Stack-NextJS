'use client'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/83tAGns9Qv1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Button} from "@/components/ui/button"
import QuickNotes from "@/components/blocks/quick-notes-2/QuickNotes";

export default function Component() {
    return (
        <div
            className="quick-notes flex min-h-screen flex-col items-center justify-between p-24 pt-10 relative"
            style={{
                backgroundImage: `url('/replicate-notes-air.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/50 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full">
                <QuickNotes/>
            </div>
        </div>
    )
}
