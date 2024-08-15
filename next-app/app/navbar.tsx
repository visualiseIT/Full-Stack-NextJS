'use client'

import {Authenticated, Unauthenticated} from "convex/react";
import {SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

export function Navbar() {
    return <div className="m-4">
        <Unauthenticated>
            <SignInButton/>
        </Unauthenticated>
        <Authenticated>
            <UserButton/>
            &nbsp;
            &nbsp;
            <Link href={"/"} className={"btn"}>Quick Notes</Link>
            <Link href={"/chat"} className={"btn"}>Chat</Link>
        </Authenticated>
    </div>;
}
