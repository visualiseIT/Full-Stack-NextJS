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
            <Link href={"/"} className={"btn"}>Home</Link>
            <Link href={"/QuickNotes1"} className={"btn"}>QuickNotes-1</Link>
            <Link href={"/QuickNotes2"} className={"btn"}>QuickNotes-2</Link>
 
            <Link href={"/postit-board"} className={"btn"}>Post-it Notes</Link>
            <Link href={"/datadashboard"} className={"btn"}>Dashboard</Link>
            <Link href={"/dashboard"} className={"btn"}>Dashboard 2</Link>
            
            <Link href={"/chat"} className={"btn"}>Chat</Link>
        </Authenticated>
    </div>;
}
