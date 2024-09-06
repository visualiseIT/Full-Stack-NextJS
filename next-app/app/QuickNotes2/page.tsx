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
            className="flex min-h-screen flex-col items-center justify-between p-24 pt-10"
            // className="p-20"
            style={{
                backgroundImage: `url('/replicate-notes-air.jpg')`,
                backgroundSize: "cover",
                // backgroundSize: "auto 100%",
                backgroundPosition: "center center",
                // backgroundRepeat: "no-repeat",
            }}
        >
            <QuickNotes/>
        </div>
    )
}
