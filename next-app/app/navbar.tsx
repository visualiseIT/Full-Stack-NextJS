'use client'

import {Authenticated, Unauthenticated} from "convex/react";
import {SignInButton, UserButton} from "@clerk/nextjs";

export function Navbar() {
    return <div className="m-4">
        <Unauthenticated>
            <SignInButton/>
        </Unauthenticated>
        <Authenticated>
            <UserButton/>
        </Authenticated>
    </div>;
}
