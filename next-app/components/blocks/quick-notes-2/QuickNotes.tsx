'use client'

import React, {useState, useEffect} from 'react';
import {Authenticated, useMutation, useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import QuickNote from "@/components/blocks/quick-notes-2/QuickNote";

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
        <div className="mb-20">
            <Authenticated>
                <div className="relative w-full max-w-2xl mx-auto mb-8">
                    <div className="absolute inset-0 transform rotate-2 scale-98 bg-yellow-100 rounded-lg shadow-lg"></div>
                    <div className="absolute inset-0 transform -rotate-2 scale-99 bg-yellow-50 rounded-lg shadow-lg"></div>
                    <div className="bg-yellow-50 rounded-lg shadow-lg p-8 transform rotate-0 relative z-10">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-3xl font-bold mb-4 text-gray-800">QuickNotes</h1>
                            <textarea
                                rows={5}
                                cols={44}
                                className="w-full p-2 border border-gray-300 rounded resize-none mb-4"
                                value={postContent}
                                onChange={e => setPostContent(e.target.value)}
                                placeholder="Write your note here..."
                            />
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
                                onClick={() => {
                                    createNote({text: postContent}).then(() => {
                                        setPostContent("");
                                    })
                                }}
                            >
                                Add Quick Note
                            </button>
                        </div>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-center">Notes:</h2>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2 relative" style={{ minHeight: '50vh', perspective:'1000px' }}>
                    {showNotes && notes?.map((note) => (
                        <QuickNote key={note._id} note={note} selectedNodes={selectedNodes} onQNoteClick={onQNoteClick} />
                    ))}
                </div>
            </Authenticated>
        </div>
    );
}

export default QuickNotes;
