'use client'

import React, {useState, useEffect} from 'react';
import {Authenticated, useMutation, useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id } from "@/convex/_generated/dataModel";
import QuickNote from "@/components/blocks/quick-notes-2/QuickNote";
import ArchivedNotesDialog from "@/components/blocks/quick-notes-2/ArchivedNotesDialog";
import {TrashIcon} from "lucide-react";

interface Note {
    _id: Id<"notes">;
    title?: string;
    text: string;
}

// Add this function to determine current column count based on screen size
const useColumnCount = () => {
    const [columnCount, setColumnCount] = useState(1);

    useEffect(() => {
        const updateColumnCount = () => {
            //console.log('Resize event fired!');  // Simple test log
            const width = window.innerWidth;
            //console.log('Window width:', width);
            let newCount = 1;
            if (width >= 1800) newCount = 5;      // xlg
            else if (width >= 1424) newCount = 4;      // lg
            else if (width >= 1068) newCount = 3;      // md
            else if (width >= 762) newCount = 2;       // sm
            setColumnCount(newCount);
            //console.log('Column count:', newCount);
        };

        // Log when effect runs
        //console.log('Effect running, adding event listener');

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);
        return () => {
            //console.log('Cleanup: removing event listener');
            window.removeEventListener('resize', updateColumnCount);
        };
    }, []);

    return columnCount;
};

function QuickNotes() {

    const [selectedNodes, setSelectedNodes] = useState<Id<any>[]>([]);
    const [postTitle, setPostTitle] = useState('QuickNote');
    const [postContent, setPostContent] = useState('');
    const createNote = useMutation(api.notes.createNote);
    const updateNote = useMutation(api.notes.updateNote);
    const notes = useQuery(api.notes.getNotes);
    const [showNotes, setShowNotes] = useState(false);
    const [editingNoteId, setEditingNoteId] = useState<Id<"notes"> | null>(null);
    const archiveNote = useMutation(api.notes.archiveNote);
    const [showArchivedNotes, setShowArchivedNotes] = useState(false);
    const [selectedColor, setSelectedColor] = useState('bg-yellow-50');
    const [showNoteCreator, setShowNoteCreator] = useState(false);
    const columnCount = useColumnCount();

    useEffect(() => {
        // Delay showing the notes to allow for the initial positioning
        const timer = setTimeout(() => setShowNotes(true), 100);
        return () => clearTimeout(timer);
    }, []);

    let onQNoteClick = (_id: Id<any>) => {
        //alert(_id);
        console.info(selectedNodes);
        setSelectedNodes((prevState) => {
            let nextState: Id<any>[] = [];
            if (selectedNodes?.includes(_id)) {
                nextState = prevState.filter((id) => id !== _id)
            } else {
                nextState = [...prevState, _id];
            }
            return nextState;
        });
    };


    const handleEditNote = (note: Note) => {
        setEditingNoteId(note._id);
        setPostTitle(note.title ?? 'QuickNote');
        setPostContent(note.text);
    }

    const handleArchiveNote = (noteId: Id<"notes">) => {
        archiveNote({ noteId, archived: true });
    };

    const pastelColors = [
        { name: 'Yellow', value: 'bg-yellow-100' },
        { name: 'Green', value: 'bg-green-100' },
        { name: 'Blue', value: 'bg-blue-100' },
        { name: 'Pink', value: 'bg-pink-100' },
        { name: 'Purple', value: 'bg-purple-100' },
    ];

    return (
        <div className="mb-20">
            <Authenticated>
                {showNoteCreator && (
                    <div className="relative w-full max-w-sm mx-auto mb-8"> {/* Changed to max-w-sm */}
                    <button
                        className="absolute -right-2 -top-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-20"
                        onClick={() => setShowNoteCreator(false)}
                    >
                        ×
                    </button>
                    <div className="absolute inset-0 transform rotate-2 scale-98 bg-yellow-100 rounded-lg shadow-lg"></div>
                    <div className="absolute inset-0 transform -rotate-2 scale-99 bg-yellow-50 rounded-lg shadow-lg"></div>
                    <div className={`rounded-lg shadow-lg p-8 transform rotate-0 relative z-10 ${selectedColor}`}>
                        <div className="flex flex-col justify-center items-center">
                            <input
                                type="text"
                                className="text-2xl font-bold mb-4 text-gray-800 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full text-center"
                                value={postTitle}
                                onChange={e => setPostTitle(e.target.value)}
                                placeholder="Note Title"
                            />
                            <textarea
                                rows={5}
                                className={`w-full p-2 border border-gray-300 rounded resize-none mb-4 ${selectedColor.replace("100", "50")}`}
                                value={postContent}
                                onChange={e => setPostContent(e.target.value)}
                                placeholder="Write your note here..."
                            />
                            <div className="flex items-center gap-4 flex-wrap justify-center">
                                <div className="flex items-center gap-2 mr-4">
                                    {pastelColors.map((color) => (
                                        <button
                                            key={color.value}
                                            className={`w-6 h-6 rounded-full ${color.value} ${selectedColor === color.value ? 'ring-2 ring-blue-500' : 'ring-1 ring-black-500'}`}
                                            onClick={() => setSelectedColor(color.value)}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                                {editingNoteId ? (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
                                        onClick={() => {
                                            updateNote({noteId: editingNoteId, title: postTitle, text: postContent, color: selectedColor}).then(() => {
                                                setPostTitle("QuickNote");
                                                setPostContent("");
                                                setSelectedColor('bg-yellow-50');
                                                setEditingNoteId(null);
                                            })
                                        }}
                                    >
                                        Save Quick Note
                                    </button>
                                ) : (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
                                        onClick={() => {
                                            createNote({title: postTitle, text: postContent, color: selectedColor}).then(() => {
                                                setPostTitle("QuickNote");
                                                setPostContent("");
                                                setSelectedColor('bg-yellow-50');
                                            })
                                        }}
                                    >
                                        Add Quick Note
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                )}

                <h2 className="text-2xl font-bold mb-4 text-center">Notes:</h2>
                <div className="grid gap-y-6 gap-x-4 relative p-4 justify-center"
                     style={{
                         minHeight: '50vh',
                         perspective: '1000px',
                         gridTemplateColumns: `repeat(${columnCount}, 320px)`
                     }}>
                    {showNotes && notes?.map((note, index) => (
                        <QuickNote
                            key={note._id}
                            note={note}
                            index={index}
                            columnCount={columnCount}
                            selectedNodes={selectedNodes}
                            onQNoteClick={onQNoteClick}
                            onEditNote={handleEditNote}
                            onArchiveNote={handleArchiveNote}
                        />
                    ))}
                </div>

                <div className="fixed bottom-4 left-4 right-4 flex justify-between">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg"
                        onClick={() => setShowArchivedNotes(true)}
                    >
                        <TrashIcon className="w-6 h-6" />
                    </button>

                    {!showNoteCreator && (
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl"
                            onClick={() => setShowNoteCreator(true)}
                        >
                            +
                        </button>
                    )}
                </div>

                <ArchivedNotesDialog open={showArchivedNotes} onClose={() => setShowArchivedNotes(false)} />
            </Authenticated>
        </div>
    );
}

export default QuickNotes;
