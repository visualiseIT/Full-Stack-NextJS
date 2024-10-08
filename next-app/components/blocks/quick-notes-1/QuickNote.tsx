import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";

function QuickNote(props: any) {

    const {note, selectedNodes, onQNoteClick} = props;

    const [scale, setScale] = useState(1);
    // const [left, setLeft] = useState(0);

    useEffect(() => {
        setScale(0.1);
        // setLeft(100);
        setTimeout(
            () => {
                setScale(1.1);
                // setLeft(100);
                setTimeout(
                    () => {
                        setScale(1);
                    },
                    300 /* 100ms == 0.1s */
                );
            },
            150 /* 100ms == 0.1s */
        );
    }, []);

    const style = {
        transform: `scale(${scale})`,
        // left: `-${left}px`
    };
    return (
        <div
            style={style}
            className={`card ${selectedNodes?.includes(note._id) ? "selected" : ""}`}
            key={note._id}
            onClick={() => onQNoteClick(note._id)}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">No title</h3>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-yellow-200">
                        <FilePenIcon className="w-4 h-4"/>
                        <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-yellow-200">
                        <TrashIcon className="w-4 h-4"/>
                        <span className="sr-only">Delete</span>
                    </Button>
                </div>
            </div>
            {note.text}
        </div>
    );
}

export default QuickNote;


function FilePenIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/>
        </svg>
    )
}

function TrashIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
        </svg>
    )
}
