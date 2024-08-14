'use client'

import React from 'react';
import {Authenticated, useMutation, useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

function QuickNotes() {

    const createNote = useMutation(api.notes.createNote);
    const notes = useQuery(api.notes.getNotes);

    return (
        <div>
            <Authenticated>
            <h1>QuickNotes</h1>
                <button className="btn btn-blue" onClick={()=>{
                    createNote({text:"A quick note"})
                }}>
                    Add Quick Notes
                </button>
                <h2>Notes:</h2>
                {notes?.map((note)=>(<div className="card" key={note._id}>{note.text}</div>))}
            </Authenticated>
        </div>
    );
}

export default QuickNotes;
