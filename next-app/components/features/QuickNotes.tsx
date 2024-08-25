'use client'

import React, {useState, useEffect} from 'react';
import {Authenticated, useMutation, useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import QuickNote from "@/components/features/QuickNote";

function QuickNotes() {

    const [selectedNodes, setSelectedNodes] = useState<Id<any>[]>([]);
    const [postContent, setPostContent] = useState('');
    const createNote = useMutation(api.notes.createNote);
    const notes = useQuery(api.notes.getNotes);
    const [showNotes, setShowNotes] = useState(false);

    useEffect(() => {
        // Delay showing the notes to allow for the initial positioning
        const timer = setTimeout(() => setShowNotes(true), 100);
        return () => clearTimeout(timer);
    }, []);

    let onQNoteClick = (_id: Id<any>)=>{
        //alert(_id);
        console.info(selectedNodes);
        setSelectedNodes((prevState) => {
            let nextState: Id<any>[] = [];
            if (selectedNodes?.includes(_id)){
                nextState = prevState.filter((id)=>id !== _id)
            }
            else {
                nextState = [...prevState, _id];
            }
            return nextState;
        });
    };



    return (
        <div className={"mb-20"}>
            <Authenticated>
                <div className="flex flex-row min-w-screen justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1>QuickNotes</h1>
                        <br/>
                        <textarea
                            rows={5}
                            cols={44}
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
                    </div>
                </div>
                <br/>
                <br/>
                <h2>Notes:</h2>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2 relative" style={{ minHeight: '50vh' }}>
                    {showNotes && notes?.map((note) => (<QuickNote note={note} selectedNodes={selectedNodes} onQNoteClick={onQNoteClick} />))}
                </div>
            </Authenticated>
        </div>
    );
}

export default QuickNotes;