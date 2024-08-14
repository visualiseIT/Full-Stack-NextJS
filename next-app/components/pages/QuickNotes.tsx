'use client'

import React, {useState} from 'react';
import {Authenticated, useMutation, useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

function QuickNotes() {

    const [postContent, setPostContent] = useState('');
    const createNote = useMutation(api.notes.createNote);
    const notes = useQuery(api.notes.getNotes);

    return (
        <div>
            <Authenticated>
                <h1>QuickNotes</h1>
                <br/>
                <textarea
                    rows={4}
                    cols={25}
                    value={postContent} // ...force the input's value to match the state variable...
                    onChange={e => setPostContent(e.target.value)} // ... and update the state variable on any edits!
                />
                <br/>
                <br/>
                <button className="btn btn-blue" onClick={() => {
                    createNote({text: postContent}).then(() => {
                        setPostContent("");
                    })
                }}>
                    Add Quick Note
                </button>
                <br/>
                <br/>
                <h2>Notes:</h2>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                    {notes?.map((note) => (<div className="card" key={note._id}>{note.text}</div>))}
                </div>
            </Authenticated>
        </div>
    );
}

export default QuickNotes;
